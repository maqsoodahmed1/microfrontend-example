import React from 'react';
import { Card, Typography, Row, Col, Statistic } from 'antd';
import { MessageOutlined, FileTextOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={1}>Welcome to Microfrontend Dashboard</Title>
        <Paragraph type="secondary" style={{ fontSize: '16px' }}>
          Your centralized platform for SMS and Reports management
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="SMS Messages"
              value={1234}
              prefix={<MessageOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Reports Generated"
              value={56}
              prefix={<FileTextOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={89}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="System Health"
              value={98.5}
              suffix="%"
              prefix={<DashboardOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="Quick Start" extra={<a href="#">More</a>}>
            <Paragraph>
              Get started with your microfrontend applications:
            </Paragraph>
            <ul>
              <li><strong>SMS Module:</strong> Send and manage SMS messages across multiple pages</li>
              <li><strong>Reports Module:</strong> Generate and view comprehensive reports</li>
              <li><strong>Shared Components:</strong> Utilize shared UI components and state management</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Recent Activity">
            <div style={{ color: '#666' }}>
              <p>• New SMS template created</p>
              <p>• Monthly report generated</p>
              <p>• User permissions updated</p>
              <p>• System backup completed</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;