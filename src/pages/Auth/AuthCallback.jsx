import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext';

// A utility function to parse the hash fragment
const parseHashFragment = (hash) => {
  const params = new URLSearchParams(hash.substring(1)); // Remove the '#'
  return {
    accessToken: params.get('access_token'),
    refreshToken: params.get('refresh_token'),
  };
};

const AuthCallback = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Show loading while processing authentication
    showLoading();

    const hash = window.location.hash;

    if (hash) {
      const { accessToken, refreshToken } = parseHashFragment(hash);

      if (accessToken && refreshToken) {
        console.log('Access Token received');

        // 1. Store the tokens in localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // 2. Clean the URL (remove the hash fragment)
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);

        // 3. Redirect the user to the dashboard
        setTimeout(() => {
          hideLoading();
          navigate('/myboard', { replace: true });
        }, 500);
      } else {
        console.error('Tokens not found in URL fragment.');
        // Handle error: redirect to login with error message
        hideLoading();
        navigate('/login', { replace: true, state: { error: 'Authentication failed. Tokens missing.' } });
      }
    } else {
      console.error('No URL fragment found for token extraction.');
      // Handle error: redirect to login with error message
      hideLoading();
      navigate('/login', { replace: true, state: { error: 'Authentication callback error.' } });
    }

    // Cleanup function to ensure loading is hidden if component unmounts
    return () => hideLoading();
  }, [navigate, showLoading, hideLoading]);

  // Return null since this is just a processing component
  return null;
};

export default AuthCallback;