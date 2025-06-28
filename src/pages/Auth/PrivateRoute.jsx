import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext';
import NotFoundScreen from '../../components/common/NotFoundScreen';
import RouteErrorBoundary from '../../components/common/RouteErrorBoundary';
import { useGetUserProfileQuery, useGetUserInfoQuery } from '../../services/userApi';
import LoadingScreen from '../../components/common/LoadingScreen';
import WelcomeModal from '../../components/merchant/WelcomeModal';

const PrivateRoute = ({ redirectTo = '/login', requireApproval = true }) => {
  const { showLoading, hideLoading } = useLoading();
  const location = useLocation();
  const path = location.pathname;
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
      console.log('Setting user role from profile data:', profileData.data.role);
      setUserRole(profileData.data.role);
      // Store profile data in localStorage
      localStorage.setItem('userProfile', JSON.stringify(profileData.data));
    } else if (userInfo?.data?.role) {
      console.log('Setting user role from user info:', userInfo.data.role);
      setUserRole(userInfo.data.role);
      // Store user info in localStorage as fallback
      localStorage.setItem('userProfile', JSON.stringify(userInfo.data));
    }
  }, [profileData, userInfo]);

  // Handle errors - only treat non-404 errors as actual errors
  useEffect(() => {
    if (profileError && profileError.status !== 404) {
      console.log('Profile error (non-404):', profileError);
      setError(profileError);
    } else if (profileError && profileError.status === 404) {
      console.log('Profile not found (404) - this is expected for new users');
      // Don't set error for 404 - this is expected when user doesn't have a profile yet
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
  console.log('Access Token:', !!accessToken);
  console.log('Is Authenticated:', isAuthenticated);
  console.log('User Role:', userRole);
  console.log('User Info:', userInfo);

  // 1. If not authenticated, redirect
  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login');
    return <Navigate to={redirectTo} replace />;
  }

  // 2. If loading, show loading screen
  if (loadingProfile) {
    return <LoadingScreen />;
  }

  // 3. If error (other than 404), show error
  if (error) {
    if (error.status === 404) {
      return <NotFoundScreen />;
    }
    return <RouteErrorBoundary error={error} />;
  }

  // 4. Show WelcomeModal if no profile exists (for any protected route)
  if (profileError?.status === 404 || !profileData?.data) {
    console.log('No profile exists, showing WelcomeModal');
    console.log('showWelcomeModal state:', showWelcomeModal);
    return (
      <>
        <WelcomeModal isOpen={true} onClose={() => setShowWelcomeModal(false)} />
        <Outlet />
      </>
    );
  }

  // 5. If user role is loaded and not merchant, redirect
  if (userRole && userRole !== 'merchant') {
    console.log('User role is not merchant, redirecting to login. Role:', userRole);
    return <Navigate to={redirectTo} replace />;
  }

  // 6. Special case for /myboard: show WelcomeModal if profile is not approved
  if (path === '/myboard') {
    const profileStatus = profileData?.data?.current_status;
    const shouldShowWelcome = ['pending', 'rejected'].includes(profileStatus);
    if (shouldShowWelcome) {
      return (
        <>
          <WelcomeModal isOpen={true} onClose={() => setShowWelcomeModal(false)} />
          <Outlet />
        </>
      );
    }
    // If userInfo role is not merchant, redirect
    if (userInfo?.data?.role && !['merchant'].includes(userInfo.data.role)) {
      return <Navigate to={redirectTo} replace />;
    }
  }

  // 7. If approval is required, check profile status
  if (requireApproval && profileData) {
    const profileStatus = profileData?.data?.current_status;
    if (profileStatus !== "approved") {
      // Let LayoutDashboard handle the modal, but allow Outlet
      return <Outlet />;
    }
  }

  // 8. Default: user is authenticated, role is valid, and profile is approved (if required)
  return <Outlet />;
};

export default PrivateRoute;
