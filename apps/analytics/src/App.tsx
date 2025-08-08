import React, { useState } from 'react';
import Sales from './pages/Sales';
import Users from './pages/Users';
import Performance from './pages/Performance';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'sales' | 'users' | 'performance'>('sales');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'sales':
        return <Sales />;
      case 'users':
        return <Users />;
      case 'performance':
        return <Performance />;
      default:
        return <Sales />;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Analytics App (Standalone)</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {[
          { key: 'sales', label: 'Sales Analytics' },
          { key: 'users', label: 'User Analytics' },
          { key: 'performance', label: 'Performance' }
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

