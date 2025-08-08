import React, { useState } from 'react';
import ProductsList from './pages/ProductsList';
import Categories from './pages/Categories';
import Inventory from './pages/Inventory';
import AddProduct from './pages/AddProduct';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'list' | 'categories' | 'inventory' | 'add'>('list');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'list':
        return <ProductsList />;
      case 'categories':
        return <Categories />;
      case 'inventory':
        return <Inventory />;
      case 'add':
        return <AddProduct />;
      default:
        return <ProductsList />;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products App (Standalone)</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {[
          { key: 'list', label: 'Product List' },
          { key: 'categories', label: 'Categories' },
          { key: 'inventory', label: 'Inventory' },
          { key: 'add', label: 'Add Product' }
        ].map(({ key, label }) => (
          <button 
            key={key}
            onClick={() => setCurrentPage(key as any)}
            style={{ 
              background: currentPage === key ? '#3b82f6' : '#e5e7eb',
              color: currentPage === key ? 'white' : 'black',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {renderPage()}
    </div>
  );
};

export default App;
