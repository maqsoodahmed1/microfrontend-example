import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

import PageLoading from '../../parent/src/components/shared/molecules/page-loader';

const ReportsPage = lazy(() => import('./pages/reports/ReportsPage.tsx'))

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Router> */}
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<ReportsPage />} />
          </Routes>
        </Suspense>
        {/* </Router> */}
      </PersistGate>
    </Provider>
  )
}

export default App