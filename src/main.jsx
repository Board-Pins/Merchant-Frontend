import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { initI18n } from '../i18n';
import { LoadingProvider } from './context/LoadingContext';
import LoadingScreen from './components/common/LoadingScreen';

const Root = () => {
  useEffect(() => {
    const setupI18n = async () => {
      await initI18n();
    };

    setupI18n();
  }, []);

  return (
    <Provider store={store}>
      <LoadingProvider>
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      </LoadingProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);


