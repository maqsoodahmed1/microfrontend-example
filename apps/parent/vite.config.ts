import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + '/../../', '');

  const baseUrl = env.VITE_MICROFRONTEND_BASE_URL || 'https://test-microfrontend.dev.dataphone.cloud';
  const parentPort = env.VITE_PARENT_PORT || '3000';
  const smsPort = env.VITE_SMS_PORT || '5003';
  const reportsPort = env.VITE_REPORTS_PORT || '5004';

  return {
    base: '/',
    envDir: '../../',
    plugins: [
      react(),
      svgr(),
      tailwindcss(),
      federation({
        name: 'parent',
        exposes: {
          './SharedStore': './src/sharedStore',
          './UserCard': './src/components/shared/UserCard',
          './StatsCard': './src/components/shared/StatsCard',
          './DataTable': './src/components/shared/DataTable',
          './SharedButton': './src/components/shared/SharedButton',
          './utils': './src/utils/index'
        },
        remotes: {
          sms: `${baseUrl}/sms/assets/remoteEntry.js`,
          reports: `${baseUrl}/reports/assets/remoteEntry.js`
        },
        shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit']
      })
    ],
    build: {
      target: 'esnext',
      modulePreload: false,
      cssCodeSplit: false,
      minify: false
    },
    server: {
      port: parseInt(parentPort),
      host: true,
      allowedHosts: [env.VITE_ALLOWED_HOST || "test-microfrontend.dev.dataphone.cloud"]
    },
    preview: {
      port: 4173,
      host: true,
      allowedHosts: ["test-microfrontend.dev.dataphone.cloud"]
    }
  };
});