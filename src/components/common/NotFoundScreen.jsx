import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

function NotFoundScreen() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <img src={logo} alt="BoardPins" className="w-[150px] mb-6" />

      <div className="text-center max-w-md">
        <div className="text-9xl font-bold text-primary/20 mb-4">404</div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page &apos;you&apos; are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Go to Home
          </Link>

          <button
            onClick={goBack}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundScreen;
