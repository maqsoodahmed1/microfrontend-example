import React from 'react';
import { Layout as AntLayout, Typography, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './layout.scss';

const { Content } = AntLayout;
const { Title, Text } = Typography;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const location = useLocation();

  // Generate breadcrumb from path
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSnippets.length - 1;

    return {
      title: isLast ? (
        <span style={{ textTransform: 'capitalize' }}>
          {snippet.replace('-', ' ')}
        </span>
      ) : (
        <span style={{ textTransform: 'capitalize' }}>
          {snippet.replace('-', ' ')}
        </span>
      )
    };
  });

  return (
    <div className="default-layout-container">
      <Sidebar
        appName="Parent App"
        permissions={undefined as unknown as { [key: string]: string[] }}
        accounts={[]}
        setSelectedAccountId={() => { }}
        appMenu={[]}
        selectedAccountId={undefined as unknown as string}
        userAccount={"sss"}
      />

      <main className="content-area">
        {/* <Header
          logout={logout}
          name={`${sessionData?.firstName} ${sessionData?.lastName}`}
          email={sessionData?.email || ""}
          icon={appMeta.icon}
          title={appMeta.title}
        /> */}
        <div className="content">{children}</div>
      </main>
    </div>
  );
};

export default Layout;