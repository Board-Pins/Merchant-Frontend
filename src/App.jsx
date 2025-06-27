import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from "./utils/LayoutDashboard";
import LayoutLanding from "./utils/LayoutLanding";
import LayoutAuth from "./utils/LayoutAuth";

import Home from "./pages/Landing/Home";
import Pricing from "./pages/Landing/Pricing";
import About from "./pages/Landing/About";
import SearchResult from "./pages/Landing/SearchResult";

import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgotPassword";
import NewPassword from "./pages/Auth/NewPassword";
import VerifyMail from "./pages/Auth/VerfiyMail";
import RecoverySuccess from "./pages/Auth/RecoverySuccess";
import EmailVerification from "./pages/Auth/EmailVerification";
import GoogleCallback from "./pages/Auth/GoogleCallback";
import AuthCallback from "./pages/Auth/AuthCallback";

import Dashboard from "./pages/Merchant/Dashboard";
import MyBoardPins from "./pages/Merchant/MyBoardPins";
import Merchant from "./pages/Merchant/Services Provider";
import MerchantPinned from "./pages/Merchant/Services ProviderPinned";
import Upgrade from "./pages/Merchant/Upgrade";
import KnowledgeBase from "./pages/Merchant/KnowledgeBase";
import ProjectmangementTasks from "./pages/Merchant/ProjectmangementTasks";
import SharedProjects from "./pages/Merchant/SharedProjects";
import SettingProfile from "./pages/Merchant/SettingProfile";
import SettingBilling from "./pages/Merchant/SettingBilling";
import OrderBilling from "./pages/Merchant/OrderBilling";
import BiddingProject from "./pages/Merchant/BiddingProject";
import MyBids from "./pages/Merchant/MyBids";
import SavedBiddingProject from "./pages/Merchant/SavedBiddingProject";
import BiddingProjectDetails from "./pages/Merchant/BiddingProjectDetails";
import CreateBiddingProject from "./pages/Merchant/CreateBiddingProject";

import CompareInProvider from "./pages/Merchant/CompareInProvider";
import CompareBetween from "./pages/Merchant/CompareBetween";
import CompareSaved from "./pages/Merchant/CompareSaved";
import CompareForms from "./pages/Merchant/CompareForms";

import ProductionGroup from "./pages/Merchant/ProductionGroup";
import ProductionGroupDetails from "./pages/Merchant/ProductionGroupDetails";
import SavedProductionGroup from "./pages/Merchant/SavedProductionGroup";
import MyRequestsProductionGroup from "./pages/Merchant/MyRequestsProductionGroup";

import Chat from "./pages/Merchant/Chat";
import ChatWelcome from "./components/merchant/Chat/ChatWelcome";
import ChatMessages from "./components/merchant/Chat/ChatMessages";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import { useLoading } from './context/LoadingContext';
import logo from './assets/images/Logo.png'; // Import logo for RootFallbackComponent

// Import error and loading components
// RouteErrorBoundary is designed for data routers, remove its usage with BrowserRouter's errorElement
import LoadingScreen from './components/common/LoadingScreen';
import NotFoundScreen from './components/common/NotFoundScreen';

// ErrorBoundary wrapper component
const ErrorBoundaryWrapper = ({ children }) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      {children}
    </Suspense>
  );
};

// Route change loading handler
const RouteChangeHandler = () => {
  const { showLoading, hideLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    showLoading();

    // Immediately hide loading after route change
    hideLoading();

    return () => {
      hideLoading(); // Ensure loading is hidden on unmount
    };
  }, [location.pathname, showLoading, hideLoading]);

  return null;
};

const RootFallbackComponent = ({ error }) => {
  // Default values
  let displayTitle = "Something went wrong";
  let displayMessage = "An unexpected error occurred while loading this page.";
  let displayErrorCode = null;
  let displayDetails = null;
  const buttonText = "Go to Home"; // Constant for this component
  const showRefreshButton = true; // Constant for this component
  const buttonLink = "/"; // Constant for this component

  if (error) {
    displayErrorCode = error.status || error.statusCode;
    displayTitle = error.statusText || displayTitle; // Use default if error.statusText is not available

    // Determine message and details
    if (error.data?.data?.errors?.en) {
      displayMessage = error.data.data.errors.en;
      displayDetails = error.data.data.errors.en; // Use the same for details if it's the most specific
    } else if (import.meta.env.MODE === 'development' && error.stack) {
      displayMessage = error.message || displayMessage;
      displayDetails = error.stack; // Show stack trace in development
    } else {
      displayMessage = error.data?.message || error.message || displayMessage;
      displayDetails = error.data?.details || null; // Prefer specific details if available
    }
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-4">
      <img src={logo} alt="BoardPins" className="w-[150px] mb-8" />

      <div className="text-center max-w-lg"> {/* Increased max-width for better details display */}
        {displayErrorCode && (
          <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 font-medium text-sm mb-4">
            Error {displayErrorCode}
          </span>
        )}

        <h1 className="text-2xl font-bold text-gray-800 mb-3">{displayTitle}</h1>
        <p className="text-gray-600 mb-6">{displayMessage}</p> {/* Adjusted margin */}


        {/* error details */}
        {displayDetails && (
          <div className="mt-4 mb-8 text-left bg-gray-100 p-4 rounded-lg max-h-60 overflow-y-auto"> {/* Added max-h and overflow */}
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Error Details:</h2>
            <pre className="text-sm text-red-700 whitespace-pre-wrap break-all">{displayDetails}</pre> {/* break-all for long strings */}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {/* Changed Link to a button with window.location.href for robustness */}
          <button
            onClick={() => window.location.href = buttonLink}
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {buttonText}
          </button>

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
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Immediately set loading to false
    setIsLoading(false);

    return () => {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary FallbackComponent={RootFallbackComponent} onError={(error, errorInfo) => {
      console.error("App level error caught:", error, errorInfo);
    }}>
      <Router>
        <RouteChangeHandler />
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={
            <ErrorBoundaryWrapper><LayoutAuth /></ErrorBoundaryWrapper>
          }>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/reset/emails" element={<NewPassword />} />
            <Route path="/verifymail/:email" element={<VerifyMail />} />
            <Route path="/emails/reset/" element={<NewPassword />} />
            <Route path="/recoverysuccess" element={<RecoverySuccess />} />
            <Route path="/emails/verify" element={<EmailVerification />} />
          </Route>

          {/* Landing Routes */}
          <Route path="/" element={
            <ErrorBoundaryWrapper><LayoutLanding /></ErrorBoundaryWrapper>
          }>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/SearchResult" element={<SearchResult />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={
              <ErrorBoundaryWrapper><Layout /></ErrorBoundaryWrapper>
            }> {/* Note: No errorElement here */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/knowledgebase" element={<KnowledgeBase />} />
              <Route path="/myboard" element={<MyBoardPins />} />
              <Route path="/services-provider" element={<Merchant />} />
              <Route path="/services-provider-pinned" element={<MerchantPinned />} />

              {/* Chat Nested Routes */}
              <Route path="/" element={<Chat />}>
                <Route path="chat" element={<ChatWelcome />} />
                <Route path="chatmessages" element={<ChatMessages />} />
              </Route>

              {/* Project Management */}
              <Route path="/projectmangement-SharedProjects" element={<SharedProjects />} />
              <Route path="/projectmangement-tasks" element={<ProjectmangementTasks />} />

              {/* Bidding Project */}
              <Route path="/create-bidding-project" element={<CreateBiddingProject />} />
              <Route path="/bidding-project" element={<BiddingProject />} />
              <Route path="/mybids" element={<MyBids />} />
              <Route path="/saved-BiddingProject" element={<SavedBiddingProject />} />
              <Route path="/bidding-project/offer" element={<BiddingProjectDetails />} />

              {/* Compare */}
              <Route path="/compare" element={<CompareInProvider />} />
              <Route path="/compare/saved" element={<CompareSaved />} />
              <Route path="/compare/forms" element={<CompareForms />} />
              <Route path="/compare-between" element={<CompareBetween />} />

              {/* Production Group */}
              <Route path="/production-group" element={<ProductionGroup />} />
              <Route path="/production-group/myrequests" element={<MyRequestsProductionGroup />} />
              <Route path="/production-group/saved" element={<SavedProductionGroup />} />
              <Route path="/production-group/:id" element={<ProductionGroupDetails />} />

              {/* Settings */}
              <Route path="/upgrade" element={<Upgrade />} />
              <Route path="/setting-profile" element={<SettingProfile />} />
              <Route path="/Setting-billing" element={<SettingBilling />} />
            </Route>
          </Route>

          {/* Public Single Page */}
          <Route path="/ordering-billing" element={<OrderBilling />} />

          {/* Google Callback Route */}
          <Route path="/auth/google/callback" element={<GoogleCallback />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* 404 Route - Must be last */}
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
