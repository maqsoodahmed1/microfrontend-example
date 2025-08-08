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

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.3);
  }
`;

const CategoryIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const CategoryName = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
`;

const CategoryCount = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const CategoryDescription = styled.p`
  font-size: 14px;
  opacity: 0.8;
  margin: 0;
`;

const categories = [
  { id: 1, name: 'Electronics', icon: '📱', count: 24, description: 'Smartphones, laptops, gadgets and more' },
  { id: 2, name: 'Home & Kitchen', icon: '🏠', count: 18, description: 'Home appliances and kitchen essentials' },
  { id: 3, name: 'Sports & Fitness', icon: '⚽', count: 15, description: 'Sports equipment and fitness gear' },
  { id: 4, name: 'Books', icon: '📚', count: 32, description: 'Educational and entertainment books' },
  { id: 5, name: 'Fashion', icon: '👔', count: 28, description: 'Clothing and fashion accessories' },
  { id: 6, name: 'Office Supplies', icon: '📋', count: 12, description: 'Office equipment and stationery' }
];

const Categories: React.FC = () => {
  return (
    <Container>
      <Title>🗂️ Product Categories</Title>
      
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id}>
            <CategoryIcon>{category.icon}</CategoryIcon>
            <CategoryName>{category.name}</CategoryName>
            <CategoryCount>{category.count} products</CategoryCount>
            <CategoryDescription>{category.description}</CategoryDescription>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </Container>
  );
};

export default Categories;

