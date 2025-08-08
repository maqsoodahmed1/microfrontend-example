import React, { useState } from 'react';
import { ConfigProvider, Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, BarChartOutlined, FileTextOutlined } from '@ant-design/icons';
import Overview from './pages/Overview';
import Statistics from './pages/Statistics';
import Reports from './pages/Reports';
import 'antd/dist/reset.css';

const { Content, Sider } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'overview' | 'statistics' | 'reports'>('overview');
  
  const menuItems = [
    {
      key: 'overview',
      icon: <DashboardOutlined />,
      label: 'Overview',
    },
    {
      key: 'statistics',
      icon: <BarChartOutlined />,
      label: 'Statistics',
    },
    {
      key: 'reports',
      icon: <FileTextOutlined />,
      label: 'Reports',
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'statistics':
        return <Statistics />;
      case 'reports':
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#667eea',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={250} style={{ background: '#fff' }}>
          <div style={{ padding: '16px' }}>
            <Title level={4}>Dashboard App (Standalone)</Title>
          </div>
          <Menu
            mode="inline"
            selectedKeys={[currentPage]}
            items={menuItems}
            onClick={({ key }) => setCurrentPage(key as any)}
          />
        </Sider>
        <Layout>
          <Content style={{ background: '#f0f2f5' }}>
            {renderPage()}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;