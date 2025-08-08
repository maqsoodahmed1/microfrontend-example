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

const SettingsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  color: #1f2937;
  font-size: 18px;
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #2563eb;
  }
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

const RoleBadge = styled.span<{ role: 'admin' | 'user' | 'manager' }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => {
    switch (props.role) {
      case 'admin': return '#fef3c7';
      case 'manager': return '#ddd6fe';
      case 'user': return '#e0f2fe';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.role) {
      case 'admin': return '#d97706';
      case 'manager': return '#7c3aed';
      case 'user': return '#0369a1';
      default: return '#6b7280';
    }
  }};
`;

const ActionButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  color: #6b7280;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background: #f9fafb;
  }
`;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' as const, lastLogin: '2024-08-08' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'manager' as const, lastLogin: '2024-08-07' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' as const, lastLogin: '2024-08-05' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'user' as const, lastLogin: '2024-08-08' }
];

const Users: React.FC = () => {
  return (
    <Container>
      <Title>👥 User Management</Title>
      
      <SettingsSection>
        <Header>
          <SectionTitle>System Users</SectionTitle>
          <Button>Add New User</Button>
        </Header>
        
        <UserTable>
          <TableHeader>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Last Login</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </tr>
          </TableHeader>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ fontWeight: 500, color: '#1f2937' }}>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <RoleBadge role={user.role}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </RoleBadge>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <ActionButton>Edit</ActionButton>
                  <ActionButton>Delete</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </UserTable>
      </SettingsSection>
    </Container>
  );
};

export default Users;

