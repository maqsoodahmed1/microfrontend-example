import React from 'react';
import { Card, Row, Col, Typography, Tag, Button } from 'antd';
import { ShoppingOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Paragraph } = Typography;

const ProductsList: React.FC = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', category: 'Electronics', description: 'High-quality wireless headphones with noise cancellation.' },
    { id: 2, name: 'Smart Watch', price: '$199.99', category: 'Electronics', description: 'Feature-rich smartwatch with health monitoring.' },
    { id: 3, name: 'Coffee Maker', price: '$79.99', category: 'Home & Kitchen', description: 'Programmable coffee maker with timer function.' },
    { id: 4, name: 'Yoga Mat', price: '$29.99', category: 'Sports', description: 'Non-slip yoga mat perfect for home workouts.' },
    { id: 5, name: 'Laptop Stand', price: '$49.99', category: 'Office', description: 'Adjustable laptop stand for better ergonomics.' },
    { id: 6, name: 'Bluetooth Speaker', price: '$59.99', category: 'Electronics', description: 'Portable speaker with excellent sound quality.' }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Electronics': 'blue',
      'Home & Kitchen': 'green',
      'Sports': 'orange',
      'Office': 'purple'
    };
    return colors[category] || 'default';
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <ShoppingOutlined style={{ marginRight: '8px' }} />
        Products List
      </Title>
      
      <Row gutter={[20, 20]}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={8} key={product.id}>
            <Card
              hoverable
              actions={[
                <Button type="text" icon={<EyeOutlined />}>View</Button>,
                <Button type="text" icon={<EditOutlined />}>Edit</Button>
              ]}
            >
              <Card.Meta
                title={
                  <div>
                    {product.name}
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#52c41a', marginTop: '8px' }}>
                      {product.price}
                    </div>
                  </div>
                }
                description={
                  <div>
                    <Tag color={getCategoryColor(product.category)} style={{ marginBottom: '8px' }}>
                      {product.category}
                    </Tag>
                    <Paragraph ellipsis={{ rows: 2 }} style={{ margin: 0 }}>
                      {product.description}
                    </Paragraph>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;