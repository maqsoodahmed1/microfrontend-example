import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  const remotes = isProduction
    ? {
        dashboard: 'https://test-microfrontend.dev.dataphone.cloud/dashboard/assets/remoteEntry.js',
        products: 'https://test-microfrontend.dev.dataphone.cloud/products/assets/remoteEntry.js',
        analytics: 'https://test-microfrontend.dev.dataphone.cloud/analytics/assets/remoteEntry.js',
        settings: 'https://test-microfrontend.dev.dataphone.cloud/settings/assets/remoteEntry.js'
      }
    : {
        // In dev mode, remoteEntry.js is at the base path root, not in /assets/
        dashboard: 'https://test-microfrontend.dev.dataphone.cloud/dashboard/remoteEntry.js',
        products: 'https://test-microfrontend.dev.dataphone.cloud/products/remoteEntry.js',
        analytics: 'https://test-microfrontend.dev.dataphone.cloud/analytics/remoteEntry.js',
        settings: 'https://test-microfrontend.dev.dataphone.cloud/settings/remoteEntry.js'
      };

  return {
    plugins: [
      react(),
      federation({
        name: 'parent',
        remotes,
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
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: [
        'test-microfrontend.dev.dataphone.cloud',
        'localhost'
      ]
    }
  };
});