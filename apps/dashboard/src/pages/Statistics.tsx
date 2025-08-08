import React from 'react';
import { Card, List, Typography, Progress } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

const Statistics: React.FC = () => {
  const statisticsData = [
    { label: 'Page Views Today', value: '12,345', progress: 75 },
    { label: 'Unique Visitors', value: '8,901', progress: 60 },
    { label: 'Bounce Rate', value: '23.4%', progress: 23 },
    { label: 'Average Session Duration', value: '4m 32s', progress: 80 },
    { label: 'Conversion Rate', value: '3.2%', progress: 32 }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <BarChartOutlined style={{ marginRight: '8px' }} />
        Statistics
      </Title>
      
      <Card style={{ marginBottom: '24px' }}>
        <Title level={4}>Performance Statistics</Title>
        <p>This page shows detailed statistics from the Dashboard micro-frontend.</p>
        
        <Card 
          style={{ margin: '16px 0', background: '#f0f2f5' }}
          bodyStyle={{ 
            height: '200px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '16px',
            color: '#666'
          }}
        >
          📊 Chart Visualization Placeholder
        </Card>
        
        <List
          itemLayout="horizontal"
          dataSource={statisticsData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.label}
                description={
                  <Progress 
                    percent={item.progress} 
                    size="small" 
                    showInfo={false}
                    strokeColor="#1890ff"
                  />
                }
              />
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                {item.value}
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Statistics;