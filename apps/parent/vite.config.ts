import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'parent',
      remotes: {
        dashboard: 'http://localhost:4001/assets/remoteEntry.js',
        products: 'http://localhost:4002/assets/remoteEntry.js',
        analytics: 'http://localhost:4003/assets/remoteEntry.js',
        settings: 'http://localhost:4004/assets/remoteEntry.js'
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