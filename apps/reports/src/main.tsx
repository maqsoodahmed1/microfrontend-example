import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MainReportsApp />,
)

export function MainReportsApp() {
  return <React.StrictMode>
    <App />
  </React.StrictMode>
}