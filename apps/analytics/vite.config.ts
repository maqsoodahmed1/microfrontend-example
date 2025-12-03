import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/analytics/',
  plugins: [
    react(),
    federation({
      name: 'analytics',
      filename: 'remoteEntry.js',
      exposes: {
        './Sales': './src/pages/Sales.tsx',
        './Users': './src/pages/Users.tsx',
        './Performance': './src/pages/Performance.tsx'
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
    port: 4003,
    host: '0.0.0.0',
    allowedHosts: [
      'test-microfrontend.dev.dataphone.cloud',
      'localhost'
    ]
  }
});

