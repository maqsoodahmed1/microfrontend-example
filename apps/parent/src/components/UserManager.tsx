import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Typography, Space, Avatar, Divider, message, Row, Col } from 'antd';
import { UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import type { RootState } from '../store/store';
import { sharedStoreActions } from '../sharedStore';

// Import shared components locally
import UserCard from './shared/UserCard';
import StatsCard from './shared/StatsCard';
import SharedButton from './shared/SharedButton';

const { Title, Text } = Typography;

const UserManager: React.FC = () => {
  const dispatch = useDispatch();
  const { currentUser, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const [demoUser] = useState({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en',
    },
  });

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const handleLogin = () => {
    sharedStoreActions.startLogin();
    // Simulate API call
    setTimeout(() => {
      sharedStoreActions.loginUser(demoUser);
      message.success('User logged in successfully!');
    }, 1000);
  };

  const handleLogout = () => {
    sharedStoreActions.logoutUser();
    message.info('User logged out');
  };

  const updatePreferences = () => {
    const newPreferences = {
      theme: currentUser?.preferences?.theme === 'light' ? 'dark' : 'light',
      lastUpdated: new Date().toISOString(),
    };
    sharedStoreActions.updatePreferences(newPreferences);
    message.success('Preferences updated!');
  };

  return (
    <div style={{ maxWidth: 1200, margin: '20px auto', padding: '0 24px' }}>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Card title="🔗 Shared Components Demo">
          <Typography.Text>
            This demo shows shared components from the shared microfrontend being used in the parent app.
          </Typography.Text>
        </Card>

        {!isAuthenticated ? (
          <Card title="User Management Demo">
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Avatar size={64} icon={<UserOutlined />} />
              <Title level={4} style={{ marginTop: 16 }}>
                Not logged in
              </Title>
              <Button
                type="primary"
                icon={<LoginOutlined />}
                onClick={handleLogin}
                loading={loading}
                size="large"
              >
                Login Demo User
              </Button>
            </div>
          </Card>
        ) : (
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <UserCard
                user={{
                  id: currentUser?.id || '',
                  name: currentUser?.name || '',
                  email: currentUser?.email || '',
                  role: currentUser?.role || '',
                  status: 'online',
                  preferences: currentUser?.preferences
                }}
                onEdit={(user) => message.info(`Edit user: ${user.name}`)}
                onSettings={() => updatePreferences()}
              />
            </Col>
            
            <Col xs={24} lg={12}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <StatsCard
                  title="Login Sessions"
                  value={42}
                  icon="👤"
                  trend={{
                    value: 12.5,
                    isPositive: true,
                    period: 'last week'
                  }}
                  onClick={() => message.info('Sessions clicked')}
                />
                
                <StatsCard
                  title="Time Online"
                  value="2h 30m"
                  icon="🕒"
                  color="#52c41a"
                />
                
                <SharedButton
                  variant="primary"
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                  style={{ width: '100%' }}
                >
                  Logout
                </SharedButton>
              </Space>
            </Col>
          </Row>
        )}

        <Divider />

        <Card title="🔧 Implementation Details" size="small">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text strong>📦 Shared Components Used:</Text>
            <ul>
              <li><code>UserCard</code> - From shared/UserCard</li>
              <li><code>StatsCard</code> - From shared/StatsCard</li>
              <li>Components loaded via Module Federation</li>
            </ul>
            
            <Text strong>🏪 State Management:</Text>
            <ul>
              <li>User data: Shared Redux store (global)</li>
              <li>UI state: Local component state</li>
              <li>Accessible from all microfrontends</li>
            </ul>

            {process.env.NODE_ENV === 'development' && (
              <>
                <Text strong>🔧 Debug Info:</Text>
                <pre style={{ 
                  fontSize: '12px', 
                  background: '#f5f5f5', 
                  padding: '12px', 
                  borderRadius: '6px',
                  overflow: 'auto'
                }}>
                  {JSON.stringify({ 
                    user: currentUser, 
                    isAuthenticated, 
                    loading 
                  }, null, 2)}
                </pre>
              </>
            )}
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default UserManager;