import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

function ErrorScreen({ 
  title = "Something went wrong", 
  message = "We're having trouble processing your request. Please try again later.",
  errorCode = null,
  buttonText = "Go Back",
  buttonLink = "/",
  showRefreshButton = true
}) {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-4">
      <img src={logo} alt="BoardPins" className="w-[150px] mb-8" />
      
      <div className="text-center max-w-md">
        {errorCode && (
          <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 font-medium text-sm mb-4">
            Error {errorCode}
          </span>
        )}
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-600 mb-8">{message}</p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to={buttonLink} 
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {buttonText}
          </Link>
          
          {showRefreshButton && (
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Refresh Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorScreen;