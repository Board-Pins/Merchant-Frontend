import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetUserProfileQuery } from '../../services/userApi';

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('access_token');
  const { data: userProfile, isLoading, error } = useGetUserProfileQuery(undefined, {
    skip: !accessToken,
  });

  useEffect(() => {
    if (accessToken) {
      // Store the token
      localStorage.setItem('accessToken', accessToken);
      
      // If we're not loading and there's no error, proceed with navigation
      if (!isLoading && !error) {
        // Always navigate to myboard - the WelcomeModal will handle profile check
        navigate('/myboard', { replace: true });
      }
    } else {
      // No token, redirect to login
      navigate('/login', { replace: true });
    }
  }, [accessToken, userProfile, isLoading, error, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-3">Processing your login...</p>
    </div>
  );
};

export default GoogleCallback;

