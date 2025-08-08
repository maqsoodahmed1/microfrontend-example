import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { RiseOutlined, DollarCircleOutlined, ShoppingCartOutlined, TrophyOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

const Sales: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <RiseOutlined style={{ marginRight: '8px' }} />
        Sales Analytics
      </Title>
      
      <Card style={{ marginBottom: '24px' }}>
        <Title level={4}>Sales Performance Chart</Title>
        <Card 
          style={{ margin: '16px 0', background: '#f0f2f5' }}
          bodyStyle={{ 
            height: '300px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '18px',
            color: '#666'
          }}
        >
          📊 Interactive Sales Chart Would Go Here
        </Card>
      </Card>

      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={127543}
              precision={2}
              prefix={<DollarCircleOutlined />}
              suffix="$"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Orders"
              value={1234}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Avg Order Value"
              value={103.42}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Growth Rate"
              value={12.4}
              precision={1}
              suffix="%"
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Sales;