import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext';
import NotFoundScreen from '../../components/common/NotFoundScreen';
import RouteErrorBoundary from '../../components/common/RouteErrorBoundary';
import { useGetUserProfileQuery, useGetUserInfoQuery } from '../../services/userApi';
import LoadingScreen from '../../components/common/LoadingScreen';
import WelcomeModal from '../../components/merchant/WelcomeModal';

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

  // Handle errors
  useEffect(() => {
    if (profileError) {
      // Don't set error for "No profile exists" errors - these should trigger profile creation
      if (profileError.status === 404 || profileError.originalStatus === 404) {
        if (profileError?.data?.message === "No profile exists for this user") {
          return;
        }
      }
      if (profileError.status === 'PARSING_ERROR' && typeof profileError.data === 'string') {
        try {
          const parsedData = JSON.parse(profileError.data);
          if (parsedData?.message === "No profile exists for this user" ||
            parsedData?.data?.errors?.en === "No profile exists for this user") {
            return;
          }
        } catch (e) {
          // Ignore parsing failure, treat as a regular error
        }
      }
      setError(profileError);
    }
  }, [profileError]);

  // Show loading screen when checking authentication
  useEffect(() => {
    if (loadingProfile) {
      showLoading();
    } else {
      hideLoading();
    }
    // Safety timeout
    const safetyTimer = setTimeout(() => {
      hideLoading();
      console.log("PrivateRoute safety timeout triggered");
    }, 1000);
    return () => {
      clearTimeout(safetyTimer);
      hideLoading();
    };
  }, [loadingProfile, hideLoading, showLoading]);

  console.log('Profile Data:', profileData);
  console.log('Profile Error:', profileError);
  console.log('Profile Status:', profileData?.data?.current_status);

  // 1. If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // 2. If loading, show loading screen
  if (loadingProfile) {
    return <LoadingScreen />;
  }

  // 3. If error (other than no profile), show error
  if (error) {
    if (error.status === 404) {
      return <NotFoundScreen />;
    }
    return <RouteErrorBoundary error={error} />;
  }

  // 4. If user role is loaded and not merchant, redirect
  if (userRole && userRole !== 'merchant') {
    return <Navigate to={redirectTo} replace />;
  }

  // 5. Special case for /myboard: show WelcomeModal if no profile or not approved, and allow Outlet
  if (path === '/myboard') {
    const profileStatus = profileData?.data?.current_status;
    const shouldShowWelcome =
      profileError?.status === 404 ||
      !profileData?.data ||
      ['pending', 'rejected'].includes(profileStatus);
    if (shouldShowWelcome) {
      return (
        <>
          <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
          <Outlet />
        </>
      );
    }
    // If userInfo role is not merchant, redirect
    if (userInfo?.data?.role && !['merchant'].includes(userInfo.data.role)) {
      return <Navigate to={redirectTo} replace />;
    }
  }

  // 6. If approval is required, check profile status
  if (requireApproval && profileData) {
    const profileStatus = profileData?.data?.current_status;
    if (profileStatus !== "approved") {
      // Let LayoutDashboard handle the modal, but allow Outlet
      return <Outlet />;
    }
  }

  // 7. Default: user is authenticated, role is valid, and profile is approved (if required)
  return <Outlet />;
};

export default PrivateRoute;
