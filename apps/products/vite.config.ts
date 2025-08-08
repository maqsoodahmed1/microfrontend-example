import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsList': './src/pages/ProductsList.tsx',
        './Categories': './src/pages/Categories.tsx',
        './Inventory': './src/pages/Inventory.tsx',
        './AddProduct': './src/pages/AddProduct.tsx'
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
    port: 4002
  }
});

