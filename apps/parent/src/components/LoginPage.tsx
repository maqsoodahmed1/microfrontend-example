import React, { useState } from 'react';
import { Card, Form, Input, Button, Alert, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState<string>('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values: { email: string; password: string }) => {
    console.log('Form submitted with values:', values); // Debug log
    setError('');
    
    const success = await login(values.email, values.password);
    console.log('Login result:', success); // Debug log
    
    if (success) {
      // Redirect to the page they were trying to access, or home page
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          maxWidth: 400,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={2} style={{ margin: 0, color: '#667eea' }}>
            Welcome Back
          </Title>
          <Text type="secondary">Sign in to your account</Text>
        </div>

        {error && (
          <Alert
            message={error}
            type="error"
            style={{ marginBottom: 16 }}
          />
        )}

        <Form
          form={form}
          name="login"
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            email: 'admin@example.com',
            password: 'password'
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={isLoading}
              size="large"
              style={{ 
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none'
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <div style={{ 
          marginTop: 16, 
          padding: 16, 
          background: '#f5f5f5', 
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Demo credentials:<br />
            Email: admin@example.com<br />
            Password: password
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;