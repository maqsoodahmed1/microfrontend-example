import React from 'react';
import { Card, Avatar, Typography, Space, Badge, Button } from 'antd';
import { UserOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Text, Title } = Typography;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 20px;
  }
  
  .user-header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .user-info {
    margin-left: 12px;
    flex: 1;
  }
  
  .user-actions {
    margin-top: 16px;
    display: flex;
    gap: 8px;
  }
  
  .user-status {
    margin-top: 8px;
  }
`;

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'away';
  preferences?: Record<string, any>;
}

interface UserCardProps {
  user: User;
  showActions?: boolean;
  size?: 'small' | 'default';
  onEdit?: (user: User) => void;
  onSettings?: (user: User) => void;
  className?: string;
  style?: React.CSSProperties;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  showActions = true,
  size = 'default',
  onEdit,
  onSettings,
  className,
  style
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'online': return '#52c41a';
      case 'away': return '#faad14';
      case 'offline': return '#ff4d4f';
      default: return '#d9d9d9';
    }
  };

  const avatarSize = size === 'small' ? 40 : 48;
  const buttonSize = size === 'small' ? 'small' : undefined;

  return (
    <StyledCard 
      className={className}
      style={style}
      size={size}
      hoverable
    >
      <div className="user-header">
        <Badge 
          dot 
          color={getStatusColor(user.status)}
          offset={[-8, 8]}
        >
          <Avatar 
            size={avatarSize}
            src={user.avatar}
            icon={!user.avatar && <UserOutlined />}
          />
        </Badge>
        
        <div className="user-info">
          <Title level={size === 'small' ? 5 : 4} style={{ margin: 0 }}>
            {user.name}
          </Title>
          <Text type="secondary" style={{ fontSize: size === 'small' ? '12px' : '14px' }}>
            {user.email}
          </Text>
          <div className="user-status">
            <Badge 
              color={getStatusColor(user.status)}
              text={
                <Text strong style={{ textTransform: 'capitalize' }}>
                  {user.role}
                </Text>
              }
            />
          </div>
        </div>
      </div>

      {user.preferences && (
        <div style={{ marginBottom: 16 }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Theme: {user.preferences.theme || 'default'} • 
            Language: {user.preferences.language || 'en'}
          </Text>
        </div>
      )}

      {showActions && (
        <div className="user-actions">
          <Button 
            icon={<EditOutlined />} 
            size={buttonSize}
            onClick={() => onEdit?.(user)}
          >
            Edit
          </Button>
          <Button 
            icon={<SettingOutlined />} 
            size={buttonSize}
            onClick={() => onSettings?.(user)}
          >
            Settings
          </Button>
        </div>
      )}
    </StyledCard>
  );
};

export default UserCard;