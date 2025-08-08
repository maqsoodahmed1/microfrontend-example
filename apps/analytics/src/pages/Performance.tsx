import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  color: #1f2937;
  font-size: 24px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`;

const MetricCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const MetricValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 8px;
`;

const MetricLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
`;

const MetricChange = styled.div<{ positive: boolean }>`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.positive ? '#059669' : '#dc2626'};
`;

const Performance: React.FC = () => {
  return (
    <Container>
      <Title>⚡ Performance Analytics</Title>
      
      <MetricsGrid>
        <MetricCard>
          <MetricValue>2.4s</MetricValue>
          <MetricLabel>Avg Page Load Time</MetricLabel>
          <MetricChange positive={true}>↗ 15% improvement</MetricChange>
        </MetricCard>
        
        <MetricCard>
          <MetricValue>99.8%</MetricValue>
          <MetricLabel>Uptime</MetricLabel>
          <MetricChange positive={true}>↗ 0.2% increase</MetricChange>
        </MetricCard>
        
        <MetricCard>
          <MetricValue>1.2MB</MetricValue>
          <MetricLabel>Bundle Size</MetricLabel>
          <MetricChange positive={false}>↘ 5% increase</MetricChange>
        </MetricCard>
        
        <MetricCard>
          <MetricValue>45ms</MetricValue>
          <MetricLabel>API Response Time</MetricLabel>
          <MetricChange positive={true}>↗ 8% improvement</MetricChange>
        </MetricCard>
        
        <MetricCard>
          <MetricValue>12,345</MetricValue>
          <MetricLabel>Requests/Hour</MetricLabel>
          <MetricChange positive={true}>↗ 23% increase</MetricChange>
        </MetricCard>
        
        <MetricCard>
          <MetricValue>0.02%</MetricValue>
          <MetricLabel>Error Rate</MetricLabel>
          <MetricChange positive={true}>↗ 0.01% decrease</MetricChange>
        </MetricCard>
      </MetricsGrid>
    </Container>
  );
};

export default Performance;

