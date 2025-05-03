import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import NotFoundScreen from './NotFoundScreen';
import ErrorScreen from './ErrorScreen';

function RouteErrorBoundary() {
  const error = useRouteError();
  
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

export default RouteErrorBoundary;