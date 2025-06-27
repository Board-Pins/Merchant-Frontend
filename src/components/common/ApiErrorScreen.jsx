import React from 'react';
import ErrorScreen from './ErrorScreen';

function ApiErrorScreen({ error, onRetry, backLink = "/" }) {
  // Default error message
  let title = "Something went wrong";
  let message = "We're having trouble processing your request. Please try again later.";
  let errorCode = null;

  // Handle different error types
  if (error) {
    errorCode = error.status || error.statusCode;

    // Handle specific error codes
    switch (errorCode) {
      case 400:
        title = "Invalid Request";
        message = "The request couldn't be processed. Please check your information and try again.";
        break;
      case 401:
        title = "Authentication Required";
        message = "You need to be logged in to access this resource.";
        break;
      case 403:
        title = "Access Denied";
        message = "You don't have permission to access this resource.";
        break;
      case 404:
        title = "Resource Not Found";
        message = "The requested resource could not be found.";
        break;
      case 500:
        title = "Server Error";
        message = "Our server encountered an error. We're working to fix the issue.";
        break;
      default:
        // If we have a message from the API, use it
        if (error.data?.message) {
          message = error.data.message;
        } else if (error.message) {
          message = error.message;
        }

        // For i18n support
        if (error.data?.data?.errors?.en) {
          message = error.data.data.errors.en;
        }
    }
  }

  return (
    <ErrorScreen
      title={title}
      message={message}
      details={error.data?.details}
      errorCode={errorCode}
      buttonText="Go Back"
      buttonLink={backLink}
      showRefreshButton={true}
    />
  );
}

export default ApiErrorScreen;