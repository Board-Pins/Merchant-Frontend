import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
  ],
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    include: [
      '@emotion/react',
      '@emotion/styled',
      '@emotion/cache',
      '@mui/material',
      '@mui/icons-material',
      'react-phone-input-2',
      'react-router-hash-link'
    ]
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    assetsInlineLimit: 10000,
    rollupOptions: {
      // Remove the external array completely or keep only truly external resources
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          emotion: ['@emotion/react', '@emotion/styled', '@emotion/cache'],
          charts: ['apexcharts', 'react-apexcharts', '@mui/x-charts']
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  esbuild: {
    // Keep console logs during development to help debug loading issues
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    port: 5174,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      credentials: true
    },
    proxy: {
      '/users-service': {
        target: 'https://api.boardpins.com',
        changeOrigin: true,
        secure: false
      },
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});


