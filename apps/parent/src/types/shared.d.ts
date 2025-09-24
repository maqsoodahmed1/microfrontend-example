// Type declarations for shared components exposed by parent
declare module 'parent/UserCard' {
  import { ComponentType } from 'react';
  
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

  const UserCard: ComponentType<UserCardProps>;
  export default UserCard;
}

declare module 'parent/StatsCard' {
  import { ComponentType } from 'react';

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

  const StatsCard: ComponentType<StatsCardProps>;
  export default StatsCard;
}

declare module 'parent/DataTable' {
  import { ComponentType } from 'react';
  import type { ColumnsType, TableProps } from 'antd/es/table';

  interface DataTableProps<T = any> extends Omit<TableProps<T>, 'columns' | 'title'> {
    title?: string;
    data: T[];
    columns: ColumnsType<T>;
    searchable?: boolean;
    searchPlaceholder?: string;
    onSearch?: (value: string) => void;
    filterable?: boolean;
    onFilter?: () => void;
    exportable?: boolean;
    onExport?: () => void;
    actions?: React.ReactNode;
    totalCount?: number;
    showHeader?: boolean;
    cardProps?: {
      extra?: React.ReactNode;
      bodyStyle?: React.CSSProperties;
    };
  }

  const DataTable: ComponentType<DataTableProps>;
  export default DataTable;
}

declare module 'parent/SharedButton' {
  import { ComponentType } from 'react';

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

  const SharedButton: ComponentType<SharedButtonProps>;
  export default SharedButton;
}

declare module 'parent/utils' {
  export const formatCurrency: (amount: number, currency?: string, locale?: string) => string;
  export const formatPercentage: (value: number, decimals?: number) => string;
  export const formatNumber: (num: number) => string;
  export const formatDate: (date: string | Date, format?: 'short' | 'medium' | 'long' | 'relative') => string;
  export const generateId: (prefix?: string) => string;
  export const debounce: <T extends (...args: any[]) => any>(func: T, delay: number) => ((...args: Parameters<T>) => void);
  export const getInitials: (name: string) => string;
  export const isValidEmail: (email: string) => boolean;
}