import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'settings',
      filename: 'remoteEntry.js',
      exposes: {
        './General': './src/pages/General.tsx',
        './Users': './src/pages/Users.tsx',
        './Security': './src/pages/Security.tsx',
        './Integrations': './src/pages/Integrations.tsx'
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
    port: 4004
  }
});

