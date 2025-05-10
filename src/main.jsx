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

// Fix emotion cache configuration
const emotionCache = createCache({
  key: 'css',
  prepend: true // Ensure styles are prepended to the <head> for faster rendering
});

const Root = () => {
  useEffect(() => {
    const setupI18n = async () => {
      await initI18n();
    };

    setupI18n();
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




