import React from 'react';
import { Layout as AntLayout, Avatar, Flex, Popover, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { cn } from '../helpers/general.helpers';
import { ReportIconLeft, ReportIconRight, ReportIconWarn } from '../assets/icons';
import DPTable from './shared/atoms/dp-table';
import StatCard from './shared/atoms/stat-card';
import { COLORS } from '../constants/colors.constants';
import MultiCardCarousel from './shared/molecules/multi-card-carousel';
import Banner from './shared/atoms/banner';
import TableHeaderWithIcons from './shared/molecules/table-header-with-icons';
import Utils from '../utils';
import dayjs from 'dayjs';

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import CallDirectionWithIcon from './shared/atoms/call-direction-with-icon';
dayjs.extend(utc);
dayjs.extend(timezone);

const { Content } = AntLayout;
const { Title, Text } = Typography;

interface Application {
  app: string;
  data: string;
}

export type CallDirection = "inbound" | "local" | "outbound"

interface CallCenter {
  name: string;
  agent: string | null;
  status?: string;
  queueID: string;
  enteredAt: string | null;
  answeredAt: string | null;
  canceledAt: string | null;
  agentNumber: number | null;
  cancelReason?: string | null;
}


export interface Flow {
  id: string;
  destination: number;
  transferred?: boolean;
  transfer_type?: string;
  flow_duration?: string;
  transfered_at?: string;
  answered?: boolean;
  answered_at?: string;
  hangup?: boolean;
  bridged?: boolean;
  hangup_at?: string;
  bridged_at?: string;
  callcenter?: CallCenter;
  application?: Application;
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

interface CallFlow {
  flows: Flow[];
  version: number;
}


export interface AgentFields {
  queue: string
  agent: string;
  caller_id_name: string;
  caller_id_number: string;
  missed: boolean,
  timestamp: string;
  cause: string
}
export interface QueueFields {
  cdr_id: string;
  queue_id: string;
  member_id: string;
  queue_name: string;
  leg: string;
  queue_duration: string;
  entered_at: string;
  original_entered_at: string;
  canceled_at: string;
  cancel_reason: string;
  status: string;
  agent: string;
  answered_at: string;
}

export interface CallFields {
  id: string;
  start_timestamp: string;
  domain_name: string;
  caller_id_name: string;
  caller_id_number: string;
  duration: string;
  dialed_number: string;
  end_timestamp: string;
  answer_timestamp: string;
  call_direction: string;
  country_code: string;
  hangup_cause: string;
  missed_call: string;
  other_e164: string[]
  our_e164: string[];
  dialed_extensions: string[];
  user_ext: string;
  call_flow: CallFlow;
  recorded: boolean;
}

export type UserFields = {
  id: string;
  start_timestamp: string;
  end_timestamp: string;
  duration: string;
  answer_timestamp: string;
  dialed_number: string;
  caller_id_name: string;
  caller_id_number: string;
  call_direction: string;
  country_code: string;
  user_agent: string;
  missed_call: string;
  user_ext: string;
  our_e164: string;
  other_e164: string;
}


const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const location = useLocation();
  const pathName = location.pathname;

  const columns = [
    {
      title: <TableHeaderWithIcons title='Caller ID Name Name' />,
      dataIndex: "caller_id_name",
      render: (name: string) => <p className='font-bold'>{name}</p>,
      key: "name",
      sorter: (a: CallFields, b: CallFields) => a.caller_id_name.localeCompare(b.caller_id_name),
    },
    {
      title: "Caller ID Number",
      dataIndex: "caller_id_number",
      key: "caller_id_number",
      render: (number: string) => Utils.formatPhoneNumber(number),
    },
    {
      title: "Dialed Number",
      dataIndex: "dialed_number",
      key: "dialed_number",
      render: (number: string) => Utils.formatPhoneNumber(number),
    },
    {
      title: "Start Time",
      key: "start_timestamp",
      dataIndex: "start_timestamp",
      render: (startTime: string) => `${dayjs(startTime).format("MM/DD/YYYY")} - ${dayjs(startTime).format("hh:mm A")}`,
    },
    {
      title: "End Time",
      key: "end_timestamp",
      dataIndex: "end_timestamp",
      render: (endTime: string) => `${dayjs(endTime).format("MM/DD/YYYY")} - ${dayjs(endTime).format("hh:mm A")}`,
    },
    {
      title: "Answer Time",
      key: "answer_timestamp",
      dataIndex: "answer_timestamp",
      render: (answerTime: string) => `${dayjs(answerTime).format("MM/DD/YYYY")} - ${dayjs(answerTime).format("hh:mm:ss A")}`,
    },


    {
      title: "Duration",
      key: "duration",
      render: (record: any) => {
        if (record.duration) {
          const durationSeconds = Number(record.duration) || 0;
          const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
          return formatted;
        } else if (!record.answered_at || !record.canceled_at) return null;
        const durationSeconds = dayjs(record.canceled_at).diff(dayjs(record.answered_at), "seconds");
        const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
        return formatted;
      },
    },


    {
      title: "Direction",
      key: "call_direction",
      dataIndex: "call_direction",
      render: (direction: CallDirection) => <CallDirectionWithIcon direction={direction} />,
    },

    {
      title: "Missed Call",
      key: "missed_call",
      dataIndex: "missed_call",
      render: (missed: boolean) => missed ? "Yes" : "No",
    },

    {
      title: "Dialed Extensions",
      key: "dialed_extensions",
      render: (record: CallFields) => (
        <Flex vertical>
          <Avatar.Group
            size="large"
            max={{
              count: 2,
              style: {
                color: "white",
                backgroundColor: Utils.getAvatarColor(record?.user_ext),
                cursor: "pointer",
                fontWeight: "600",
              },
              popover: { trigger: "hover" },
            }}
          >
            {record?.dialed_extensions &&
              record?.dialed_extensions
                .filter(Utils.onlyUnique)
                .map((extension: string) => (
                  <Popover
                    key={extension}
                    overlayInnerStyle={{ width: "fit-content" }}
                    overlayStyle={{ width: "fit-content" }}
                    title={
                      <Avatar
                        style={{
                          backgroundColor: Utils.getAvatarColor(extension),
                          cursor: "pointer",
                          color: "white",
                          fontWeight: "600",
                        }}
                      >
                        {extension}
                      </Avatar>
                    }
                  >
                    <Avatar
                      style={{
                        backgroundColor: Utils.getAvatarColor(extension),
                        cursor: "pointer",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      {extension}
                    </Avatar>
                  </Popover>
                ))}
          </Avatar.Group>
        </Flex>
      ),
    },


    {
      title: "Phone Number",
      key: "our_e164",
      dataIndex: "our_e164",
      render: (numbers: string[]) =>
        numbers?.length
          ? numbers.map(num => Utils.formatPhoneNumber(num)).join(", ")
          : "-",
    },

    {
      title: "End Time",
      key: "start_timestamp",
      dataIndex: "start_timestamp",
      render: () => { },
    },
  ];

  const data = [
    {
      key: Math.random(),
      caller_id_name: "13472180110",
      caller_id_number: "13472180110",
      dialed_number: '13472180110',
      start_timestamp: '2025-09-26T13:40:18.000Z',
      answer_timestamp: '2025-09-26T13:40:18.000Z',
      duration: '70',
      call_direction: 'inbound',
      dialed_extensions: ['123', '323', '532', '532'],
      user_ext: "494",
      our_e164: ["13472180110"]
    },
    {
      key: Math.random(),
      caller_id_name: "13472180110",
      caller_id_number: "13472180110",
      dialed_number: '13472180110',
      start_timestamp: '2025-09-26T13:40:18.000Z',
      answer_timestamp: '2025-09-26T13:40:18.000Z',
      duration: '70',
      call_direction: 'outbound',
    },
    {
      key: Math.random(),
      caller_id_name: "13472180110",
      caller_id_number: "13472180110",
      dialed_number: '13472180110',
      start_timestamp: '2025-09-26T13:40:18.000Z',
      answer_timestamp: '2025-09-26T13:40:18.000Z',
      duration: '70',
      call_direction: 'local',
    },

  ];
  const sideBarCollapsed = (collapsed: boolean) => {
    const layout: HTMLElement = document.getElementById("main-layout-sec")!;
    if (!collapsed) {
      layout?.classList.add(
        "before:content-['']",
        "before:display-block",
        "before:absolute",
        "before:z-40",
        "before:h-full",
        "before:w-full",
        "before:bg-black",
        "before:opacity-50",
        "before:transition-all",
        "before:duration-500",
        "before:ease-in-out"
      );
    } else {
      layout?.classList.remove(
        "before:content-['']",
        "before:display-block",
        "before:absolute",
        "before:z-40",
        "before:h-full",
        "before:w-full",
        "before:bg-black",
        "before:opacity-50",
        "before:transition-all",
        "before:duration-500",
        "before:ease-in-out"
      );
    }
  };

  return (
    <AntLayout
      className={cn(
        "h-screen w-screen overflow-hidden auth-bg [&_.ant-layout]:!bg-transparent"
      )}>
      <Sidebar sideBarCollapsed={sideBarCollapsed} />
      <AntLayout>
        <Content className="min-h-[120px] [&_*]:!font-rethink-sans overflow-auto bg-transparent p-10">
          <Banner title='Analytics' buttonText='Export Data' description='Complete communication suite for modern businesses' className='mb-6' />
          <MultiCardCarousel className='mb-6'>
            <StatCard label="Total Reports" value="190" color={COLORS.PRIMARY} icon={<ReportIconWarn className='text-white' />} />
            <StatCard label="Received Reports" value="140" color={COLORS.DP_DARK_GREEN} icon={<ReportIconLeft className='text-white' />} />
            <StatCard label="Sent Reports" value="50" color={COLORS.DP_PURPLE_V2} icon={<ReportIconRight className='text-white' />} />
            <StatCard label="Bulk Reports" value="19" color={COLORS.DP_LIME_GREEN} icon={<ReportIconLeft className='text-white' />} />
            <StatCard label="Failed Reports" value="10" color={COLORS.DP_RED} icon={<ReportIconWarn className='text-white' />} />
          </MultiCardCarousel>
          <DPTable scroll={{ x: 1800 }} columns={columns} dataSource={data} />
          {/* {children} */}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;