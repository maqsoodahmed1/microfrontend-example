import React, { useState } from 'react';
import { Card, Form, Input, Select, Button, Typography, message } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;
const { Option } = Select;

const General: React.FC = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    console.log('Settings saved:', values);
    message.success('Settings saved successfully!');
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <SettingOutlined style={{ marginRight: '8px' }} />
        General Settings
      </Title>
      
      <Card title="Company Information" style={{ marginBottom: '24px' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            companyName: 'My Company',
            language: 'en',
            timezone: 'UTC',
            currency: 'USD'
          }}
        >
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[{ required: true, message: 'Please enter company name' }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>
        </Form>
      </Card>

      <Card title="Localization">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="language" label="Language">
            <Select>
              <Option value="en">English</Option>
              <Option value="es">Spanish</Option>
              <Option value="fr">French</Option>
              <Option value="de">German</Option>
            </Select>
          </Form.Item>

          <Form.Item name="timezone" label="Timezone">
            <Select>
              <Option value="UTC">UTC</Option>
              <Option value="EST">Eastern Time</Option>
              <Option value="PST">Pacific Time</Option>
              <Option value="CET">Central European Time</Option>
            </Select>
          </Form.Item>

          <Form.Item name="currency" label="Currency">
            <Select>
              <Option value="USD">USD - US Dollar</Option>
              <Option value="EUR">EUR - Euro</Option>
              <Option value="GBP">GBP - British Pound</Option>
              <Option value="JPY">JPY - Japanese Yen</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default General;