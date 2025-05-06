import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import LoadingScreen from './common/LoadingScreen';
import RouteErrorBoundary from './common/RouteErrorBoundary';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        console.log("PrivateRoute checking token:", !!accessToken);
        
        // You could add additional token validation here if needed
        
        setIsAuthenticated(!!accessToken);
      } catch (err) {
        console.error("Auth check failed:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  
  if (error) {
    return <RouteErrorBoundary />;
  }

  if (!isAuthenticated) {
    console.log("Not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("User is authenticated, rendering protected content");
  return <Outlet />;
};

export default PrivateRoute;


