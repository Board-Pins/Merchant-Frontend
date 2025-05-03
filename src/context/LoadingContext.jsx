
import React, { createContext, useState, useContext } from 'react';
import LoadingScreen from '../components/common/LoadingScreen';

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {}
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);
  
  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {isLoading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
