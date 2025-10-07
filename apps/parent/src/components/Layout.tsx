import React, { useState } from 'react';
import { Layout as AntLayout, Avatar, Button, DatePicker, Divider, Flex, Popover, Tag, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { cn } from '../helpers/general.helpers';
import { ArrowLeftRightIcon, BookmarkIcon, CalenderThinIcon, CallIconPointy, CloseIcon, CloseIcon2, Downloadcon, DownloadStackIcon, PencilIcon, PlayIcon, ReportIconLeft, ReportIconRight, ReportIconWarn } from '../assets/icons';
import DPTable from './shared/atoms/dp-table';
import StatCard from './shared/atoms/stat-card';
import { COLORS } from '../constants/colors.constants';
import MultiCardCarousel from './shared/molecules/multi-card-carousel';
import Banner from './shared/atoms/banner';
import TableHeaderWithIcons from './shared/molecules/table-header-with-icons';
import Utils from '../utils';
import dayjs from 'dayjs';

import _, { startCase } from 'lodash';

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import CallDirectionWithIcon from './shared/atoms/call-direction-with-icon';
import PopoverDropdown from './shared/atoms/popover-dropdown';
import DPDateRangePicker from './shared/atoms/dp-date-rangepicker';
import DPButton from './shared/atoms/dp-button';
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
      title: <TableHeaderWithIcons title='Caller ID Name' />,
      dataIndex: "caller_id_name",
      width: 180,
      render: (name: string) => name ? <p className='font-bold flex items-center gap-2'>{<Avatar className='!size-10 min-w-10' style={{ backgroundColor: Utils.getAvatarColor(name) }} size="default"
      >{name[0]}</Avatar>} {name}</p> : "-",
      key: "name",
      sorter: (a: CallFields, b: CallFields) => a.caller_id_name.localeCompare(b.caller_id_name),
    },
    {
      title: "Caller ID Number",
      dataIndex: "caller_id_number",
      key: "caller_id_number",
      render: (number: string) => number ? <div className='flex items-center gap-2'><CallIconPointy className='text-dp-dark-green min-w-fit ' /> {Utils.formatPhoneNumber(number)}</div> : "-",
    },
    {
      title: "Dialed Number",
      dataIndex: "dialed_number",
      key: "dialed_number",
      render: (number: string) => number ? <div className='flex items-center gap-2'><CallIconPointy className=' min-w-fit text-primary' /> {Utils.formatPhoneNumber(number)}</div> : "-",
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
          return <Tag>{formatted}</Tag>;
        } else if (!record.answered_at || !record.canceled_at) return null;
        const durationSeconds = dayjs(record.canceled_at).diff(dayjs(record.answered_at), "seconds");
        const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
        return <Tag>{formatted}</Tag>;
      },
    },

    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (record: string) => {
        const status = record ? record.toLowerCase() : "";
        let color = "default";
        if (status === "answered") {
          color = "green";
        } else if (status === "cancelled" || status === "canceled" || status === "cancel") {
          color = "red";
        }
        return <Tag color={color}>{_.capitalize(status)}</Tag>;
      },
    },

    {
      title: "Queue Duration",
      key: "queue_duration",
      dataIndex: "queue_duration",
      render: (record: string) => {
        const durationSeconds = Number(record) || 0;
        const formatted = dayjs.utc(durationSeconds * 1000).format("HH:mm:ss");
        return <Tag>{formatted}</Tag>;
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
      width: 150,
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
      title: "Other Phone Number(s)",
      key: "other_e164",
      dataIndex: "other_e164",
      width: 210,
      render: (numbers: string[]) =>
        numbers?.length ? (
          <div className="flex flex-col gap-1 max-h-[100px] overflow-y-auto">
            {numbers.map((num, index) => (
              <div key={index} className="flex items-center gap-2">
                {Utils.formatPhoneNumber(num)}
                <BookmarkIcon className="text-dp-dark-green" />
                {index === 0 && <Button type='text' className='!p-0 !h-fit'>
                  <PencilIcon className='text-dp-gray-blue' />
                </Button>}
              </div>
            ))}
          </div>
        ) : (
          "-"
        ),
    },
    {
      title: "Country Code",
      key: "country_code",
      dataIndex: "country_code",
      render: (country_code: string) => country_code || "-",
    },
    {
      title: "Recording",
      fixed: "right",
      key: "recorded",
      dataIndex: "recorded",
      render: (recorded: boolean) => {
        return recorded ? (
          <div className='flex items-center gap-2'>
            <Button type='text' className='!p-0.5'>
              <Downloadcon className="text-dp-gray-blue" />
            </Button>
            <Button type='text' className='!p-0.5'>
              <PlayIcon className="text-primary" />
            </Button>
          </div>
        ) : "-";
      },
    },
    {
      title: "Hangup Cause",
      key: "hangup_cause",
      dataIndex: "hangup_cause",
      render: (hangupCause: string) => _.startCase(hangupCause) || "-",
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
      our_e164: ["13472180110"],
      other_e164: ["13472180110", "13472180110"],
      recorded: true,
      country_code: "US",
      hangup_cause: "busy"
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
      hangup_cause: "NOT_ANSWERED"
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
          <div className='bg-white rounded-xl'>
            <div className="flex items-center gap-4 px-5 py-4">
              <h2 className='text-2xl font-bold !mb-0 text-dp-dark-blue'>Reports</h2>
              <Divider type="vertical" className='text-dp-gray-blue !h-8 !border-gray-300 !border-s-2' />
              <Button type='text' className='!p-0 !h-fit !bg-transparent'>
                <DownloadStackIcon className='text-dp-blue' />
                <p className='!m-0 font-semibold !text-base text-dp-blue'>Export Report</p>
              </Button>
              <FilterDropdown />
            </div>
            <DPTable scroll={{ x: columns.length * 140 + 100 }} columns={columns} dataSource={data} />
          </div>
          {/* {children} */}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export interface DateOption {
  key: string;
  label: string;
  startTime: string;
  endTime: string;
}

export const DEFAULT_OPTIONS: DateOption[] = [
  {
    key: "Today",
    label: "Today",
    startTime: dayjs().startOf("day").toISOString(),
    endTime: dayjs().endOf("day").toISOString(),
  },
  {
    key: "Yesterday",
    label: "Yesterday",
    startTime: dayjs().subtract(1, "day").startOf("day").toISOString(),
    endTime: dayjs().subtract(1, "day").endOf("day").toISOString(),
  },
  {
    key: "WeekToDate",
    label: "Week to Date",
    startTime: dayjs().startOf("week").toISOString(),
    endTime: dayjs().endOf("day").toISOString(),
  },
  {
    key: "LastWeek",
    label: "Last Week",
    startTime: dayjs()
      .subtract(1, "week")
      .startOf("week")
      .add(1, "day")
      .toISOString(),
    endTime: dayjs()
      .subtract(1, "week")
      .endOf("week")
      .add(1, "day")
      .toISOString(),
  },
  {
    key: "Last7Days",
    label: "Last 7 Days",
    startTime: dayjs().subtract(7, "day").startOf("day").toISOString(),
    endTime: dayjs().subtract(1, "day").endOf("day").toISOString(),
  },
  {
    key: "MonthToDate",
    label: "Month to Date",
    startTime: dayjs().startOf("month").toISOString(),
    endTime: dayjs().endOf("day").toISOString(),
  },
  {
    key: "LastMonth",
    label: "Last Month",
    startTime: dayjs().subtract(1, "month").startOf("month").toISOString(),
    endTime: dayjs().subtract(1, "month").endOf("month").toISOString(),
  },
  {
    key: "Last30Days",
    label: "Last 30 Days",
    startTime: dayjs().subtract(30, "day").startOf("day").toISOString(),
    endTime: dayjs().subtract(1, "day").endOf("day").toISOString(),
  },
  {
    key: "Last90Days",
    label: "Last 90 Days",
    startTime: dayjs().subtract(90, "day").startOf("day").toISOString(),
    endTime: dayjs().endOf("day").toISOString(),
  },
  {
    key: "YearToDate",
    label: "Year to Date",
    startTime: dayjs().startOf("year").toISOString(),
    endTime: dayjs().endOf("day").toISOString(),
  },
  {
    key: "LastYear",
    label: "Last Year",
    startTime: dayjs().subtract(1, "year").startOf("year").toISOString(),
    endTime: dayjs().subtract(1, "year").endOf("year").toISOString(),
  },
];

function FilterDropdown() {

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DateOption | null>(DEFAULT_OPTIONS[0]);

  return (

    <PopoverDropdown
      icon={<CalenderThinIcon className='text-dp-gray-blue' />}
      open={open}
      onOpenChange={setOpen}
      label="Filter"
      placement='bottom'
      content={
        <div className='p-3.5 !w-sm !space-y-3.5 pb-5 mb-5'>
          <div className="flex items-center justify-between bg-[#f1f1f1] py-4 px-5 rounded-t-xl">
            <span className='font-semibold text-dp-blue'>Filter By Date</span>
            <Button
              type='text'
              className='!p-0 !h-fit !bg-transparent'
              onClick={() => setOpen(false)}>
              <CloseIcon2 className='size-4.5 text-dp-blue' />
            </Button>
          </div>

          <DPDateRangePicker className='!w-full' placeholder={["Start Date", "End Date"]} />

          <div className='grid grid-cols-3 gap-2 text-xs 2xl:text-sm'>
            {DEFAULT_OPTIONS.map((option) => (
              <span key={option.key} aria-role='radio' onClick={() => setSelectedOption(option)} className={cn("bg-[#f3f4f5c4] border rounded-lg py-3 px-1 border-gray-200 hover:bg-gray-100 text-dp-gray-blue block font-semibold text-center w-full cursor-pointer", {
                "bg-primary text-white hover:bg-primary border-primary": selectedOption?.key === option.key
              })}>
                {option.label}
              </span>
            ))}
          </div>

          <div className='flex items-center gap-3'>
            <DPButton dpVariant='secondary'>Apply Filter</DPButton>
            <DPButton dpVariant='primary'>Clear Filters</DPButton>
          </div>
        </div>
      }
    />
  )
}


export default Layout;