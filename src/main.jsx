import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { initI18n } from '../i18n';
import { LoadingProvider } from './context/LoadingContext';
import LoadingScreen from './components/common/LoadingScreen';

// Add performance monitoring in development
if (import.meta.env.DEV) {
  const reportWebVitals = async () => {
    const { onCLS, onFID, onLCP } = await import('web-vitals');
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
  };
  reportWebVitals();
}

// Optimize emotion cache configuration
const emotionCache = createCache({
  key: 'css',
  prepend: true, // Ensure styles are prepended to the <head> for faster rendering
  speedy: import.meta.env.PROD // Enable speedy mode in production for better performance
});

const Root = () => {
  useEffect(() => {
    // Initialize i18n with a small delay to prioritize UI rendering
    const setupI18n = async () => {
      // Small timeout to prioritize initial render
      setTimeout(async () => {
        await initI18n();
      }, 100);
    };

    setupI18n();
    
    // Preload critical assets after initial render
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Preload important routes
        import('./pages/Merchant/Dashboard');
        import('./pages/Merchant/MyBoardPins');
      });
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <LoadingProvider>
          <Suspense fallback={<LoadingScreen />}>
            <App />
          </Suspense>
        </LoadingProvider>
      </Provider>
    </CacheProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);




