import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NotFoundScreen from './NotFoundScreen';
import ErrorScreen from './ErrorScreen';

function RouteErrorBoundary() {
  const error = useRouteError();
  
  console.error('Route error caught:', error);
  
  // Handle 404 errors
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundScreen />;
  }
  
  // Handle other route errors
  let title = "Something went wrong";
  let message = "An unexpected error occurred while loading this page.";
  let errorCode = isRouteErrorResponse(error) ? error.status : null;
  
  if (isRouteErrorResponse(error)) {
    title = error.statusText || title;
    message = error.data?.message || message;
  } else if (error instanceof Error) {
    message = error.message;
    // Add stack trace to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error details:', error.stack);
    }
  }
  
  return (
    <ErrorScreen
      title={title}
      message={message}
      errorCode={errorCode}
      buttonText="Go to Home"
      buttonLink="/"
    />
  );
}

export default RouteErrorBoundary;
