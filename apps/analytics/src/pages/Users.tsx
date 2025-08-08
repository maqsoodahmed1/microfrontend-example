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

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: #f9fafb;
`;

const TableRow = styled.tr`
  &:hover {
    background: #f9fafb;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280;
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: #374151;
`;

const StatusBadge = styled.span<{ status: 'active' | 'inactive' }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.status === 'active' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.status === 'active' ? '#059669' : '#dc2626'};
`;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', lastLogin: '2024-08-08', status: 'active' as const },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', lastLogin: '2024-08-07', status: 'active' as const },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', lastLogin: '2024-08-05', status: 'inactive' as const },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', lastLogin: '2024-08-08', status: 'active' as const }
];

const Users: React.FC = () => {
  return (
    <Container>
      <Title>👥 User Analytics</Title>
      
      <Card>
        <h3>User Activity Overview</h3>
        <p>Track user engagement and behavior patterns.</p>
        
        <UserTable>
          <TableHeader>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Last Login</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </tr>
          </TableHeader>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ fontWeight: 500, color: '#1f2937' }}>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <StatusBadge status={user.status}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </StatusBadge>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </UserTable>
      </Card>
    </Container>
  );
};

export default Users;

