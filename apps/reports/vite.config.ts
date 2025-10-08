import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + '/../../', '');
  
  const baseUrl = env.VITE_MICROFRONTEND_BASE_URL || 'https://test-microfrontend.dev.dataphone.cloud';
  const reportsPort = env.VITE_REPORTS_PORT || '5004';

  return {
    envDir: '../../',
    plugins: [
      react(),
      federation({
        name: 'reports',
        filename: 'remoteEntry.js',
        exposes: {
          './reports/ReportsPage': './src/pages/reports/ReportsPage.tsx',
          './Page2': './src/pages/Page2.tsx',
          './Page3': './src/pages/Page3.tsx'
        },
        remotes: {
          parent: `${baseUrl}/assets/remoteEntry.js`
        },
        shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit']
      })
    ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
    server: {
      port: parseInt(reportsPort),
      host: true,
      allowedHosts: [env.VITE_ALLOWED_HOST || "test-microfrontend.dev.dataphone.cloud"]
    },
    preview: {
      port: 4174,
      host: true,
      allowedHosts: [env.VITE_ALLOWED_HOST || "test-microfrontend.dev.dataphone.cloud"]
    }
  };
});