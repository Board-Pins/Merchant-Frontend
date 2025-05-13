import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import { initI18n } from '../i18n';
import { LoadingProvider } from './context/LoadingContext';
import LoadingScreen from './components/common/LoadingScreen';

const emotionCache = createCache({
  key: 'css',
  prepend: true,
  speedy: import.meta.env.PROD,
});

// Initialize i18n before rendering the app
const renderApp = async () => {
  try {
    await initI18n(); // Await i18n setup to ensure language detection/load is complete

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <CacheProvider value={emotionCache}>
          <Provider store={store}>
            <LoadingProvider>
              <Suspense fallback={<LoadingScreen />}>
                <App />
              </Suspense>
            </LoadingProvider>
          </Provider>
        </CacheProvider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Fatal rendering error:", error);
    // Render a minimal fallback UI
    document.getElementById('root').innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
        <h1>Something went wrong</h1>
        <p>We're having trouble loading the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()">Refresh Page</button>
      </div>
    `;
  }
};

renderApp();

