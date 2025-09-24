import React from 'react';
import { Card, Statistic, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  .stat-icon {
    font-size: 24px;
    margin-bottom: 8px;
  }
  
  .trend-indicator {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

interface StatsCardProps {
  title: string;
  value: number | string;
  prefix?: React.ReactNode;
  suffix?: string;
  precision?: number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  loading?: boolean;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  precision,
  icon,
  trend,
  loading = false,
  color = '#1890ff',
  onClick,
  style,
  className
}) => {
  return (
    <StyledCard 
      hoverable={!!onClick}
      onClick={onClick}
      style={style}
      className={className}
      loading={loading}
    >
      {icon && (
        <div className="stat-icon" style={{ color }}>
          {icon}
        </div>
      )}
      
      <Statistic
        title={title}
        value={value}
        prefix={prefix}
        suffix={suffix}
        precision={precision}
        valueStyle={{ color }}
      />
      
      {trend && (
        <div className="trend-indicator">
          <span style={{ 
            color: trend.isPositive ? '#52c41a' : '#ff4d4f',
            fontSize: '12px'
          }}>
            {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
          </span>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            vs {trend.period}
          </Text>
        </div>
      )}
    </StyledCard>
  );
};

export default StatsCard;