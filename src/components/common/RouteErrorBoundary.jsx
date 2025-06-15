import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NotFoundScreen from './NotFoundScreen';
import ErrorScreen from './ErrorScreen';

export default function RouteErrorBoundary({ onError }) {
  const error = useRouteError();
  
  // Log the error for debugging
  console.error('Route error:', error);
  
  // If a custom error handler is provided, use it
  if (onError && typeof onError === 'function') {
    return onError(error);
  }
  
  // Handle module loading errors
  if (error instanceof TypeError && error.message.includes('bare specifier')) {
    return (
      <ErrorScreen
        title="Module Loading Error"
        message="There was a problem loading a required module. Please try clearing your cache and refreshing the page."
        errorCode="MODULE_ERR"
        buttonText="Refresh Page"
        buttonAction={() => window.location.reload(true)}
      />
    );
  }
  
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