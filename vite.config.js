import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    },
    proxy: {
      '/users-service': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Improve long-term caching with deterministic hashes
    rollupOptions: {
      output: {
        manualChunks: {
          // Remove React from manualChunks since it's external
          vendor: ['react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          emotion: ['@emotion/react', '@emotion/styled'],
          charts: ['apexcharts', 'react-apexcharts', '@mui/x-charts'],
        },
        // Customize asset filenames for better caching
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
      external: []
    },
    // Ensure assets are properly hashed for cache busting
    assetsInlineLimit: 4096, // 4kb - default value
  },
})











