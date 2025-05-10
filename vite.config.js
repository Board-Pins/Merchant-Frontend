import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env variables based on mode
  const env = loadEnv(mode, process.cwd());
  const isProd = mode === 'production';

  return {
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
      include: ['@emotion/react', '@emotion/styled', '@emotion/cache']
    },
    server: {
      // Improve hot module replacement
      hmr: {
        overlay: true,
      },
      // Handle client-side routing
      historyApiFallback: true,
    },
    build: {
      // Only generate sourcemaps in development
      sourcemap: !isProd,
      // Reduce chunk size warnings threshold
      chunkSizeWarningLimit: 1000,
      // Minify output in production
      minify: isProd ? 'terser' : false,
      terserOptions: isProd ? {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      } : undefined,
      rollupOptions: {
        output: {
          // Optimize chunk strategy
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            mui: ['@mui/material', '@mui/icons-material'],
            emotion: ['@emotion/react', '@emotion/styled', '@emotion/cache'],
            charts: ['apexcharts', 'react-apexcharts', '@mui/x-charts'],
            i18n: ['i18next', 'react-i18next'],
            forms: ['formik', 'yup'],
            // Split UI components into separate chunks
            ui: ['react-select', 'react-modal', 'react-icons', 'sweetalert2']
          }
        }
      }
    }
  };
});

