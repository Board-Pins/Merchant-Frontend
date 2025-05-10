import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@emotion/cache', 'i18next']
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['i18next'],
      output: {
        manualChunks: {
          vendor: ['react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          emotion: ['@emotion/react', '@emotion/styled', '@emotion/cache'],
          charts: ['apexcharts', 'react-apexcharts', '@mui/x-charts'],
        }
      }
    }
  }
})


