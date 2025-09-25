import React from 'react';
import { Layout as AntLayout, Typography, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { cn } from '../helpers/general.helpers';
import { CloseIcon, ReportIconLeft, ReportIconRight, ReportIconWarn } from '../assets/icons';
import DPTable from './shared/atoms/dp-table';
import { ArrowDownOutlined, ArrowUpOutlined, SwapOutlined } from '@ant-design/icons';
import StatCard from './shared/atoms/stat-card';
import { COLORS } from '../constants/colors.constants';
import MultiCardCarousel from './shared/molecules/multi-card-carousel';

const { Content } = AntLayout;
const { Title, Text } = Typography;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const location = useLocation();
  const pathName = location.pathname;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.age - b.age, // 👈 numeric sort
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: Math.random(),
      name: "John Doe",
      age: 28,
      address: "123 Main Street",
    },
    {
      key: "2",
      name: "Jane Smith",
      age: 32,
      address: "456 Oak Avenue",
    },
    {
      key: "3",
      name: "Sam Wilson",
      age: 41,
      address: "789 Pine Road",
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
          <MultiCardCarousel className='mb-4'>
            <StatCard label="Total Reports" value="190" color={COLORS.PRIMARY} icon={<ReportIconWarn className='text-white' />} />
            <StatCard label="Received Reports" value="140" color={COLORS.DP_DARK_GREEN} icon={<ReportIconLeft className='text-white' />} />
            <StatCard label="Sent Reports" value="50" color={COLORS.DP_PURPLE_V2} icon={<ReportIconRight className='text-white' />} />
            <StatCard label="Bulk Reports" value="19" color={COLORS.DP_LIME_GREEN} icon={<ReportIconLeft className='text-white' />} />
            <StatCard label="Failed Reports" value="10" color={COLORS.DP_RED} icon={<ReportIconWarn className='text-white' />} />
          </MultiCardCarousel>
          <DPTable columns={columns} dataSource={data} />
          {/* {children} */}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;