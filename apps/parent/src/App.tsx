import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, Spin, Alert } from 'antd';
import Layout from './components/Layout';
import 'antd/dist/reset.css';

// Lazy load remote components
const DashboardOverview = lazy(() => import('dashboard/Overview'));
const DashboardStatistics = lazy(() => import('dashboard/Statistics'));
const DashboardReports = lazy(() => import('dashboard/Reports'));

const ProductsList = lazy(() => import('products/ProductsList'));
const ProductsCategories = lazy(() => import('products/Categories'));
const ProductsInventory = lazy(() => import('products/Inventory'));
const ProductsAdd = lazy(() => import('products/AddProduct'));

const AnalyticsSales = lazy(() => import('analytics/Sales'));
const AnalyticsUsers = lazy(() => import('analytics/Users'));
const AnalyticsPerformance = lazy(() => import('analytics/Performance'));

const SettingsGeneral = lazy(() => import('settings/General'));
const SettingsUsers = lazy(() => import('settings/Users'));
const SettingsSecurity = lazy(() => import('settings/Security'));
const SettingsIntegrations = lazy(() => import('settings/Integrations'));

// Loading component
const Loading: React.FC = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px' 
  }}>
    <Spin size="large" tip="Loading micro-frontend..." />
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert
          message="Micro-frontend failed to load"
          description="Please check if the remote application is running."
          type="error"
          showIcon
          style={{ margin: '24px 0' }}
          action={
            <details style={{ marginTop: '16px', textAlign: 'left' }}>
              <summary style={{ cursor: 'pointer', color: '#1890ff' }}>
                Error details
              </summary>
              <pre style={{ 
                fontSize: '12px', 
                marginTop: '8px',
                background: '#f5f5f5',
                padding: '8px',
                borderRadius: '4px',
                overflow: 'auto'
              }}>
                {this.state.error?.message}
              </pre>
            </details>
          }
        />
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#667eea',
          borderRadius: 8,
          colorBgContainer: '#ffffff',
        },
      }}
    >
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Default redirect */}
              <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
              
              {/* Dashboard routes */}
              <Route path="/dashboard/overview" element={<DashboardOverview />} />
              <Route path="/dashboard/statistics" element={<DashboardStatistics />} />
              <Route path="/dashboard/reports" element={<DashboardReports />} />
              
              {/* Products routes */}
              <Route path="/products/list" element={<ProductsList />} />
              <Route path="/products/categories" element={<ProductsCategories />} />
              <Route path="/products/inventory" element={<ProductsInventory />} />
              <Route path="/products/add" element={<ProductsAdd />} />
              
              {/* Analytics routes */}
              <Route path="/analytics/sales" element={<AnalyticsSales />} />
              <Route path="/analytics/users" element={<AnalyticsUsers />} />
              <Route path="/analytics/performance" element={<AnalyticsPerformance />} />
              
              {/* Settings routes */}
              <Route path="/settings/general" element={<SettingsGeneral />} />
              <Route path="/settings/users" element={<SettingsUsers />} />
              <Route path="/settings/security" element={<SettingsSecurity />} />
              <Route path="/settings/integrations" element={<SettingsIntegrations />} />
              
              {/* Catch all */}
              <Route path="*" element={
                <Alert
                  message="Page Not Found"
                  description="The page you're looking for doesn't exist."
                  type="warning"
                  showIcon
                  style={{ textAlign: 'center', margin: '48px 0' }}
                />
              } />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </ConfigProvider>
  );
};

export default App;