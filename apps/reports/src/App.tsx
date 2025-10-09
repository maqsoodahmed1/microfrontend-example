import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'antd'
import Page1 from './pages/reports/ReportsPage.tsx'
import Page2 from './pages/Page2.tsx'
import Page3 from './pages/Page3.tsx'
import ReportsPage from './pages/reports/ReportsPage.tsx'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

const { Content } = Layout

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Router> */}
          <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '24px' }}>
              <Routes>
                <Route path="/" element={<ReportsPage />} />
                <Route path="/reports" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
              </Routes>
            </Content>
          </Layout>
        {/* </Router> */}
      </PersistGate>
    </Provider>
  )
}

export default App