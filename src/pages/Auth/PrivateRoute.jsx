import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext';
import NotFoundScreen from '../../components/common/NotFoundScreen';
import RouteErrorBoundary from '../../components/common/RouteErrorBoundary';
import { useGetUserProfileQuery, useGetUserInfoQuery } from '../../services/userApi';
import LoadingScreen from '../../components/common/LoadingScreen';
import WelcomeModal from '../../components/merchant/WelcomeModal'

const PrivateRoute = ({ redirectTo = '/login', requireApproval = true, path }) => {
  const { showLoading, hideLoading } = useLoading();
  const accessToken = localStorage.getItem('accessToken');
  const isAuthenticated = !!accessToken;
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // Get user info to check role and profile data
  const {
    data: profileData,
    error: profileError,
    isLoading: loadingProfile
  } = useGetUserProfileQuery(undefined, {
    skip: !isAuthenticated
  });
  // Get user info to check role
  const { data: userInfo } = useGetUserInfoQuery(undefined, {
    skip: !isAuthenticated
  });

  // Show welcome modal when profile doesn't exist
  useEffect(() => {
    if (profileError?.status === 404 || !profileData?.data) {
      setShowWelcomeModal(true);
    } else {
      setShowWelcomeModal(false);
    }
  }, [profileError, profileData]);
  useEffect(() => {
    if (profileData?.data?.role) {
      setUserRole(profileData.data.role);
      // Store profile data in localStorage
      localStorage.setItem('userProfile', JSON.stringify(profileData.data));
    }
  }, [profileData]);

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

  // Check if user is authenticated and has merchant role
  if (!isAuthenticated || (userRole && userRole !== 'merchant')) {
    return <Navigate to={redirectTo} replace />;
  }

  // If profile is loading, show loading screen
  if (loadingProfile) {
    return <LoadingScreen />;
  }

  if (error) {
    // If it's a 404 error, render the NotFoundScreen
    if (error.status === 404) {
      return <NotFoundScreen />;
    }
    return <RouteErrorBoundary error={error} />;
  }

  // Check if user is authenticated and has valid role for /myboard
  if (!isAuthenticated || (path === '/myboard' && userInfo?.data?.role && !['merchant'].includes(userInfo.data.role))) {
    return <Navigate to={redirectTo} replace />;
  }

  // For /myboard path, check if profile exists
  if (path === '/myboard') {
    if (profileError?.status === 404 || !profileData?.data) {
      return (
        <>
          <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
          <Outlet />
        </>
      );
    }
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




