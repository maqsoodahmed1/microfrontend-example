import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, Spin, Alert } from 'antd';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { initializeSharedStore, store } from './sharedStore';
import 'antd/dist/reset.css';

// Local components
import UserManager from './components/UserManager';
import SharedComponentsInfo from './components/SharedComponentsInfo';
import HomePage from './components/HomePage';
import { COLORS, getColorIntensity } from './constants/colors.constants';

// Inline loading component for page transitions
const PageLoading: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    flexDirection: 'column',
    gap: '16px'
  }}>
    <Spin size="large" />
    <span style={{ color: '#666' }}>Loading page...</span>
  </div>
);

// Lazy load remote components
const SmsPage1 = lazy(() => import('sms/Page1'));
const SmsPage2 = lazy(() => import('sms/Page2'));
const SmsPage3 = lazy(() => import('sms/Page3'));

const ReportsPage1 = lazy(() => import('reports/Page1'));
const ReportsPage2 = lazy(() => import('reports/Page2'));
const ReportsPage3 = lazy(() => import('reports/Page3'));

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
  useEffect(() => {
    // Initialize shared store on app startup
    initializeSharedStore();
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <ConfigProvider
          theme={{
            components: {
              Checkbox: {
                borderRadius: 4,
                controlInteractiveSize: 18,
              },
              Tooltip: {
                borderRadius: 12,
                paddingXS: 10,
                paddingSM: 20,
                fontSize: 12,
                colorBgSpotlight:  getColorIntensity(COLORS.PRIMARY, 0.8)
              },
              Select: {
                controlHeight: 53,
                colorText: COLORS.DP_GRAY_DARK,
                borderRadius: 11,
                colorBorder: COLORS.DP_ICE_BLUE,
                hoverBorderColor: getColorIntensity(COLORS.PRIMARY, 0.55),
                activeBorderColor: getColorIntensity(COLORS.PRIMARY, 0.55),
                colorTextPlaceholder: COLORS.DP_GRAY_SEMI,
                // colorBgContainer: COLORS.ACCENT_LIGHT,
                // optionSelectedBg: COLORS.ACCENT_LIGHT,
                // optionSelectedColor: COLORS.OFF_WHITE,
                optionHeight: 20,
                optionPadding: 10,
                // colorBgElevated: COLORS.SECONDARY_DARK_V2,
              },
              Table: {
                colorText: COLORS.DP_GRAY_BLUE,
                colorTextHeading: COLORS.DP_GRAY,
                // colorTextBase: COLORS.GRAY_COOL,
                headerSplitColor: "transparent",
                fontSizeLG: 12,
                fontSizeXL: 12,
              },
            },
            token: {
              colorPrimary: COLORS.PRIMARY,
              colorInfo: COLORS.PRIMARY,
              borderRadius: 12,
              // colorBgContainer: '#ffffff',
            },
          }}
        >
          <ErrorBoundary>
            <Routes>
              {/* Public route */}
              <Route path="/login" element={<LoginPage />} />

              {/* Protected routes */}
              <Route path="/*" element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      {/* Home page at root */}
                      <Route path="/" element={<HomePage />} />

                      {/* User Management Demo */}
                      <Route path="/user-demo" element={<UserManager />} />

                      {/* Shared Components Info */}
                      <Route path="/shared-info" element={<SharedComponentsInfo />} />

                      {/* SMS routes */}
                      <Route path="/sms/page1" element={
                        <Suspense fallback={<PageLoading />}>
                          <SmsPage1 />
                        </Suspense>
                      } />
                      <Route path="/sms/page2" element={
                        <Suspense fallback={<PageLoading />}>
                          <SmsPage2 />
                        </Suspense>
                      } />
                      <Route path="/sms/page3" element={
                        <Suspense fallback={<PageLoading />}>
                          <SmsPage3 />
                        </Suspense>
                      } />

                      {/* Reports routes */}
                      <Route path="/reports/page1" element={
                        <Suspense fallback={<PageLoading />}>
                          <ReportsPage1 />
                        </Suspense>
                      } />
                      <Route path="/reports/page2" element={
                        <Suspense fallback={<PageLoading />}>
                          <ReportsPage2 />
                        </Suspense>
                      } />
                      <Route path="/reports/page3" element={
                        <Suspense fallback={<PageLoading />}>
                          <ReportsPage3 />
                        </Suspense>
                      } />

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
                  </Layout>
                </ProtectedRoute>
              } />
            </Routes>
          </ErrorBoundary>
        </ConfigProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;