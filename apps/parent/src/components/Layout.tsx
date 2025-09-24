import React from 'react';
import { Layout as AntLayout, Typography, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { cn } from '../helpers/general.helpers';
import { CloseIcon } from '../assets/icons';

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
        <Content className="min-h-[120px] overflow-auto bg-transparent">
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;