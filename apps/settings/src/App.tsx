import React, { useState } from 'react';
import General from './pages/General';
import Users from './pages/Users';
import Security from './pages/Security';
import Integrations from './pages/Integrations';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'general' | 'users' | 'security' | 'integrations'>('general');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'general':
        return <General />;
      case 'users':
        return <Users />;
      case 'security':
        return <Security />;
      case 'integrations':
        return <Integrations />;
      default:
        return <General />;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Settings App (Standalone)</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {[
          { key: 'general', label: 'General' },
          { key: 'users', label: 'Users' },
          { key: 'security', label: 'Security' },
          { key: 'integrations', label: 'Integrations' }
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

