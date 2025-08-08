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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductName = styled.h4`
  margin: 0 0 8px;
  color: #1f2937;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #059669;
  margin-bottom: 8px;
`;

const ProductCategory = styled.div`
  background: #e0e7ff;
  color: #3730a3;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 12px;
`;

const ProductDescription = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0;
`;

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$99.99', category: 'Electronics', description: 'High-quality wireless headphones with noise cancellation.' },
  { id: 2, name: 'Smart Watch', price: '$199.99', category: 'Electronics', description: 'Feature-rich smartwatch with health monitoring.' },
  { id: 3, name: 'Coffee Maker', price: '$79.99', category: 'Home & Kitchen', description: 'Programmable coffee maker with timer function.' },
  { id: 4, name: 'Yoga Mat', price: '$29.99', category: 'Sports', description: 'Non-slip yoga mat perfect for home workouts.' },
  { id: 5, name: 'Laptop Stand', price: '$49.99', category: 'Office', description: 'Adjustable laptop stand for better ergonomics.' },
  { id: 6, name: 'Bluetooth Speaker', price: '$59.99', category: 'Electronics', description: 'Portable speaker with excellent sound quality.' }
];

const ProductsList: React.FC = () => {
  return (
    <Container>
      <Title>📦 Products List</Title>
      
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductsList;
