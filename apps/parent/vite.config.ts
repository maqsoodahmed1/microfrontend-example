import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'parent',
      remotes: {
        dashboard: 'https://newportal.dev.dataphone.cloud/dashboard/assets/remoteEntry.js',
        products: 'https://newportal.dev.dataphone.cloud/products/assets/remoteEntry.js',
        analytics: 'https://newportal.dev.dataphone.cloud/analytics/assets/remoteEntry.js',
        settings: 'https://newportal.dev.dataphone.cloud/settings/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
    minify: false
  },
  server: {
    port: 3000
  }
});