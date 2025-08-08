import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { ArrowUpOutlined, DashboardOutlined, UserOutlined, DollarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

const Overview: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <DashboardOutlined style={{ marginRight: '8px' }} />
        Dashboard Overview
      </Title>
      
      <Card style={{ marginBottom: '24px' }}>
        <Title level={4}>Welcome to the Dashboard</Title>
        <p>This page is loaded from the Dashboard micro-frontend running on port 4001.</p>
        <p>It provides an overview of key metrics and system status.</p>
      </Card>

      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={1234}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
              suffix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Revenue"
              value={56700}
              precision={2}
              prefix={<DollarOutlined />}
              suffix="$"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="System Health"
              value={89}
              suffix="%"
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Sessions"
              value={432}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;