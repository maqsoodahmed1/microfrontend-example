import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { FileTextOutlined, DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Paragraph } = Typography;

const Reports: React.FC = () => {
  const reports = [
    {
      title: '📊 Monthly Summary',
      description: 'Comprehensive overview of monthly performance metrics and KPIs.',
    },
    {
      title: '👥 User Activity',
      description: 'Detailed analysis of user engagement and activity patterns.',
    },
    {
      title: '💰 Revenue Analysis',
      description: 'Financial performance breakdown and revenue trend analysis.',
    },
    {
      title: '🎯 Conversion Funnel',
      description: 'Step-by-step conversion analysis and optimization insights.',
    },
    {
      title: '🔧 System Performance',
      description: 'Technical metrics, uptime, and system health monitoring.',
    },
    {
      title: '📈 Growth Metrics',
      description: 'Long-term growth trends and forecasting analytics.',
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <FileTextOutlined style={{ marginRight: '8px' }} />
        Reports
      </Title>
      
      <Card style={{ marginBottom: '24px' }}>
        <Title level={4}>Available Reports</Title>
        <Paragraph>
          Generate and download various reports from the Dashboard micro-frontend.
        </Paragraph>
      </Card>

      <Row gutter={[20, 20]}>
        {reports.map((report, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              hoverable
              actions={[
                <Button 
                  type="primary" 
                  icon={<DownloadOutlined />}
                  onClick={() => console.log(`Generating ${report.title}`)}
                >
                  Generate Report
                </Button>
              ]}
            >
              <Card.Meta
                title={report.title}
                description={report.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reports;