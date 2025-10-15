import React, { useState } from 'react';
import { Layout as AntLayout, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { cn } from '../helpers/general.helpers';

const { Content } = AntLayout;

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
        <div className="h-[64px]   border-b pb-5 pt-3 pl-5 border-l bg-white border-gray-200">
          <h2 className='text-primary text-xl font-rethink-sans font-semibold'>Reports</h2>
        </div>
        <Content className="min-h-[120px] [&_*]:!font-rethink-sans overflow-auto bg-transparent px-10 py-5">
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;