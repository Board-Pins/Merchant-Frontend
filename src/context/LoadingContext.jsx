
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import LoadingScreen from '../components/common/LoadingScreen';

const LoadingContext = createContext({
  isLoading: false,
  isPageLoading: false,
  isInitialLoading: true, // Track initial app load
  showLoading: () => { },
  hideLoading: () => { },
  setPageLoading: () => { },
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Add refs to track loading timeouts
  const loadingTimeoutRef = useRef(null);
  const pageLoadingTimeoutRef = useRef(null);
  const initialLoadingTimeoutRef = useRef(null);

  // Handle initial app loading with safety timeout
  useEffect(() => {
    // Set a timeout to ensure initial loading doesn't get stuck
    initialLoadingTimeoutRef.current = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500);

    // Safety timeout - force hide loading after 10 seconds no matter what
    const safetyTimeout = setTimeout(() => {
      if (isInitialLoading) {
        console.warn("Force hiding initial loading after safety timeout");
        setIsInitialLoading(false);
      }
    }, 10000);

    return () => {
      clearTimeout(initialLoadingTimeoutRef.current);
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Controlled loading functions with safety timeouts
  const showLoading = () => {
    setIsLoading(true);

    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    // Set safety timeout - force hide after 15 seconds
    loadingTimeoutRef.current = setTimeout(() => {
      console.warn("Force hiding loading after safety timeout");
      setIsLoading(false);
    }, 15000);
  };

  const hideLoading = () => {
    setIsLoading(false);
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
  };

  const setPageLoading = (value) => {
    setIsPageLoading(value);

    // Clear any existing timeout
    if (pageLoadingTimeoutRef.current) {
      clearTimeout(pageLoadingTimeoutRef.current);
    }

    // If turning on loading, set safety timeout
    if (value) {
      pageLoadingTimeoutRef.current = setTimeout(() => {
        console.warn("Force hiding page loading after safety timeout");
        setIsPageLoading(false);
      }, 8000);
    }
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        isPageLoading,
        isInitialLoading,
        showLoading,
        hideLoading,
        setPageLoading
      }}
    >
      {(isLoading || isPageLoading) && <LoadingScreen />}
      {isInitialLoading ? (
        <LoadingScreen fullScreen={true} />
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

// Use this hook in API call functions
export const useLoadingWithData = () => {
  const { showLoading, hideLoading } = useLoading();

  const fetchWithLoading = async (fetchFunction) => {
    try {
      showLoading();
      const result = await fetchFunction();
      return result;
    } finally {
      hideLoading();
    }
  };

  return fetchWithLoading;
};

// Use this hook for page transitions only
export const usePageTransition = () => {
  const { setPageLoading } = useLoading();

  return {
    startTransition: () => setPageLoading(true),
    endTransition: () => setPageLoading(false)
  };
};