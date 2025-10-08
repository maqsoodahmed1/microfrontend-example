import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  // Load env from root directory (two levels up from apps/sms)
  const env = loadEnv(mode, process.cwd() + '/../../', '');
  
  // Get base URL from environment or use default
  const baseUrl = env.VITE_MICROFRONTEND_BASE_URL || 'https://test-microfrontend.dev.dataphone.cloud';
  const smsPort = env.VITE_SMS_PORT || '5003';

  return {
    envDir: '../../',
    plugins: [
      react(),
      federation({
        name: 'sms',
        filename: 'remoteEntry.js',
        exposes: {
          './Page1': './src/pages/Page1.tsx',
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
      port: parseInt(smsPort),
      host: true,
      allowedHosts: [env.VITE_ALLOWED_HOST || "test-microfrontend.dev.dataphone.cloud"]
    },
    preview: {
      port: 4173,
      host: true,
      allowedHosts: [env.VITE_ALLOWED_HOST || "test-microfrontend.dev.dataphone.cloud"]
    }
  };
});