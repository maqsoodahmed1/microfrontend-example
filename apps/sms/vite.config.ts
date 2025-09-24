import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
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
        parent: 'https://test-microfrontend.dev.dataphone.cloud/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5003,
    host: true,
    allowedHosts: ["test-microfrontend.dev.dataphone.cloud"]
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ["test-microfrontend.dev.dataphone.cloud"]
  }
})