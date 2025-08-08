import React from 'react';
import { Layout as AntLayout, Typography, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

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
    <AntLayout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Sidebar />
      <AntLayout style={{ marginLeft: 280 }}>
        <Content style={{ 
          padding: '24px',
          background: '#f5f5f5',
          minHeight: '100vh'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            background: 'white',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Breadcrumb */}
            {pathSnippets.length > 0 && (
              <Breadcrumb 
                style={{ marginBottom: '16px' }}
                items={[
                  { title: 'Home' },
                  ...breadcrumbItems
                ]}
              />
            )}
            
            {/* Page Header */}
            {title && (
              <div style={{ 
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <Title level={2} style={{ margin: 0, color: '#1f2937' }}>
                  {title}
                </Title>
                {description && (
                  <Text type="secondary" style={{ fontSize: '14px' }}>
                    {description}
                  </Text>
                )}
              </div>
            )}
            
            {/* Main Content */}
            {children}
          </div>
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;