import React from 'react';
import { Table, Card, Space, Button, Input, Typography, Tag } from 'antd';
import { SearchOutlined, FilterOutlined, ExportOutlined } from '@ant-design/icons';
import type { ColumnsType, TableProps } from 'antd/es/table';

const { Title } = Typography;

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

const DataTable = <T extends Record<string, any>>({
  title,
  data,
  columns,
  searchable = true,
  searchPlaceholder = 'Search...',
  onSearch,
  filterable = true,
  onFilter,
  exportable = false,
  onExport,
  actions,
  totalCount,
  showHeader = true,
  cardProps,
  ...tableProps
}: DataTableProps<T>) => {
  const headerActions = (
    <Space>
      {searchable && (
        <Input.Search
          placeholder={searchPlaceholder}
          onSearch={onSearch}
          style={{ width: 200 }}
          allowClear
        />
      )}
      {filterable && (
        <Button 
          icon={<FilterOutlined />} 
          onClick={onFilter}
        >
          Filter
        </Button>
      )}
      {exportable && (
        <Button 
          icon={<ExportOutlined />} 
          onClick={onExport}
        >
          Export
        </Button>
      )}
      {actions}
    </Space>
  );

  const tableContent = (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => 
          `${range[0]}-${range[1]} of ${total} items`,
        ...tableProps.pagination
      }}
      {...tableProps}
    />
  );

  if (!showHeader && !title) {
    return tableContent;
  }

  return (
    <Card
      title={title && (
        <Space align="center">
          <Title level={4} style={{ margin: 0 }}>
            {title}
          </Title>
          {totalCount !== undefined && (
            <Tag color="blue">{totalCount} items</Tag>
          )}
        </Space>
      )}
      extra={headerActions}
      {...cardProps}
    >
      {tableContent}
    </Card>
  );
};

export default DataTable;