import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext';
import NotFoundScreen from '../../components/common/NotFoundScreen';
import RouteErrorBoundary from '../../components/common/RouteErrorBoundary';
import { useGetUserProfileQuery } from '../../services/userApi';
import LoadingScreen from '../../components/common/LoadingScreen';

const PrivateRoute = ({ redirectTo = '/login', requireApproval = true }) => {
  const { showLoading, hideLoading } = useLoading();
  const accessToken = localStorage.getItem('accessToken');
  const isAuthenticated = !!accessToken;
  const [error, setError] = useState(null);

  // Get profile data to check approval status
  const {
    data: profileData,
    error: profileError,
    isLoading: loadingProfile
  } = useGetUserProfileQuery(undefined, {
    skip: !isAuthenticated
  });

  // Show loading screen when checking authentication
  useEffect(() => {
    showLoading();

    // Hide loading when profile data is loaded or on error
    if (profileData || profileError || !isAuthenticated) {
      hideLoading();
    }

    // Safety timeout to prevent infinite loading - use a shorter timeout
    const safetyTimer = setTimeout(() => {
      hideLoading();
      console.log("PrivateRoute safety timeout triggered");
    }, 1000);

    return () => {
      clearTimeout(safetyTimer);
      hideLoading();
    };
  }, [profileData, profileError, isAuthenticated, hideLoading, showLoading]);

  // Handle errors
  useEffect(() => {
    if (profileError) {
      // Don't set error for "No profile exists" errors - these should trigger profile creation
      if (profileError.status === 404 || profileError.originalStatus === 404) {
        // Check if this is a "No profile exists" error
        if (profileError?.data?.message === "No profile exists for this user") {
          return; // Skip error handling for this case
        }
      }

      // Handle PARSING_ERROR with string data
      if (profileError.status === 'PARSING_ERROR' && typeof profileError.data === 'string') {
        try {
          const parsedData = JSON.parse(profileError.data);
          if (parsedData?.message === "No profile exists for this user" ||
            parsedData?.data?.errors?.en === "No profile exists for this user") {
            // This is expected for new users, don't treat as an error
            return;
          }
        } catch (e) {
          // If parsing fails, treat as a regular error
        }
      }

      // For all other errors, set the error state
      setError(profileError);
    }
  }, [profileError]);

  // Skip the loading screen to prevent getting stuck
  // if (loadingProfile) {
  //   return <LoadingScreen />;
  // }

  if (error) {
    // If it's a 404 error, render the NotFoundScreen
    if (error.status === 404) {
      return <NotFoundScreen />;
    }
    return <RouteErrorBoundary error={error} />;
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // If approval is required, check profile status
  if (requireApproval && profileData) {
    const profileStatus = profileData?.data?.current_status;

    // If profile is not approved, redirect to a waiting page
    if (profileStatus !== "approved") {
      // We'll let the LayoutDashboard handle showing the appropriate modal
      // but we could redirect to a specific waiting page if needed
      return <Outlet />;
    }
  }

  // User is authenticated and (if required) approved
  return <Outlet />;
};

export default PrivateRoute;



