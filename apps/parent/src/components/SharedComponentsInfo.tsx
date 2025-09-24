import React from 'react';
import { Card, Typography, Space, Divider, Tag, List } from 'antd';

const { Title, Text, Paragraph } = Typography;

const SharedComponentsInfo: React.FC = () => {
  const sharedComponents = [
    {
      name: 'UserCard',
      description: 'Reusable user profile card with status indicators',
      usage: 'User management, profiles, contact lists'
    },
    {
      name: 'StatsCard',
      description: 'Statistical display card with trend indicators',
      usage: 'Dashboards, analytics, metrics display'
    },
    {
      name: 'DataTable',
      description: 'Enhanced table with search, filter, and export',
      usage: 'Data listing, reports, admin panels'
    },
    {
      name: 'SharedButton',
      description: 'Styled button with brand consistency',
      usage: 'Forms, actions, navigation'
    }
  ];

  const utilities = [
    'formatCurrency', 'formatNumber', 'formatDate', 
    'generateId', 'debounce', 'getInitials', 'isValidEmail'
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Card>
          <Title level={2}>🔗 Shared Components Architecture</Title>
          <Paragraph>
            The parent app now serves as the shared component library, exposing reusable 
            components and utilities to all other microfrontends via Module Federation.
          </Paragraph>
        </Card>

        <Card title="📦 Available Shared Components">
          <List
            dataSource={sharedComponents}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>{item.name}</Text>}
                  description={
                    <Space direction="vertical" size="small">
                      <Text>{item.description}</Text>
                      <div>
                        <Text type="secondary">Usage: </Text>
                        <Tag color="blue">{item.usage}</Tag>
                      </div>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        <Card title="🛠️ Shared Utilities">
          <Space wrap>
            {utilities.map((util) => (
              <Tag key={util} color="green">{util}</Tag>
            ))}
          </Space>
        </Card>

        <Card title="🏗️ How to Use Shared Components">
          <Space direction="vertical" style={{ width: '100%' }}>
            <div>
              <Text strong>1. Import in other microfrontends:</Text>
              <pre style={{ 
                background: '#f5f5f5', 
                padding: '12px', 
                borderRadius: '6px',
                marginTop: '8px'
              }}>
{`const UserCard = React.lazy(() => import('parent/UserCard'));
const StatsCard = React.lazy(() => import('parent/StatsCard'));`}
              </pre>
            </div>

            <div>
              <Text strong>2. Update vite.config.ts remotes:</Text>
              <pre style={{ 
                background: '#f5f5f5', 
                padding: '12px', 
                borderRadius: '6px',
                marginTop: '8px'
              }}>
{`remotes: {
  parent: 'https://your-domain.com/assets/remoteEntry.js'
}`}
              </pre>
            </div>

            <div>
              <Text strong>3. Use with Suspense for loading fallback:</Text>
              <pre style={{ 
                background: '#f5f5f5', 
                padding: '12px', 
                borderRadius: '6px',
                marginTop: '8px'
              }}>
{`<React.Suspense fallback={<Card loading />}>
  <UserCard user={userData} />
</React.Suspense>`}
              </pre>
            </div>
          </Space>
        </Card>

        <Card title="✅ Benefits of Parent as Shared Provider">
          <List
            size="small"
            dataSource={[
              'Simplified architecture - no separate shared microfrontend needed',
              'Better performance - components already loaded with parent',
              'Centralized management - all shared resources in one place',
              'Reduced deployment complexity - one less service to manage',
              'Shared state management - Redux store available globally',
              'Consistent branding - all components follow same design system'
            ]}
            renderItem={(item) => (
              <List.Item>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    </div>
  );
};

export default SharedComponentsInfo;