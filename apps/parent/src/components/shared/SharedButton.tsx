import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  transition: all 0.3s ease;
  
  &.shared-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: white;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  }
  
  &.shared-secondary {
    border: 2px solid #667eea;
    color: #667eea;
    background: transparent;
    
    &:hover {
      background: #667eea;
      color: white;
    }
  }
`;

interface SharedButtonProps {
  variant?: 'primary' | 'secondary' | 'default';
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'middle' | 'large';
  className?: string;
  style?: React.CSSProperties;
}

const SharedButton: React.FC<SharedButtonProps> = ({
  variant = 'default',
  children,
  onClick,
  loading,
  disabled,
  icon,
  size,
  className,
  style
}) => {
  const getClassName = () => {
    const baseClass = className || '';
    switch (variant) {
      case 'primary':
        return `shared-primary ${baseClass}`;
      case 'secondary':
        return `shared-secondary ${baseClass}`;
      default:
        return baseClass;
    }
  };

  return (
    <StyledButton
      className={getClassName()}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      icon={icon}
      size={size}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default SharedButton;