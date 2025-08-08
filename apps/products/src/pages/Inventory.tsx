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

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background: #f9fafb;
`;

const TableHeaderCell = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
`;

const TableRow = styled.tr`
  &:hover {
    background: #f9fafb;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StockBadge = styled.span<{ level: 'low' | 'medium' | 'high' }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => {
    switch (props.level) {
      case 'low': return '#fee2e2';
      case 'medium': return '#fef3c7';
      case 'high': return '#d1fae5';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.level) {
      case 'low': return '#dc2626';
      case 'medium': return '#d97706';
      case 'high': return '#059669';
      default: return '#6b7280';
    }
  }};
`;

const inventory = [
  { id: 1, name: 'Wireless Headphones', sku: 'WH-001', stock: 45, price: '$99.99', status: 'high' as const },
  { id: 2, name: 'Smart Watch', sku: 'SW-002', stock: 23, price: '$199.99', status: 'medium' as const },
  { id: 3, name: 'Coffee Maker', sku: 'CM-003', stock: 8, price: '$79.99', status: 'low' as const },
  { id: 4, name: 'Yoga Mat', sku: 'YM-004', stock: 67, price: '$29.99', status: 'high' as const },
  { id: 5, name: 'Laptop Stand', sku: 'LS-005', stock: 15, price: '$49.99', status: 'medium' as const },
  { id: 6, name: 'Bluetooth Speaker', sku: 'BS-006', stock: 3, price: '$59.99', status: 'low' as const }
];

const Inventory: React.FC = () => {
  return (
    <Container>
      <Title>📋 Inventory Management</Title>
      
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Product Name</TableHeaderCell>
            <TableHeaderCell>SKU</TableHeaderCell>
            <TableHeaderCell>Stock Level</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell style={{ fontWeight: 500, color: '#1f2937' }}>{item.name}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>{item.stock} units</TableCell>
              <TableCell style={{ fontWeight: 600, color: '#059669' }}>{item.price}</TableCell>
              <TableCell>
                <StockBadge level={item.status}>
                  {item.status === 'low' ? 'Low Stock' : 
                   item.status === 'medium' ? 'Medium' : 'In Stock'}
                </StockBadge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Inventory;

