import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';
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

import GoogleCallback from "./pages/Auth/GoogleCallback";

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

import PrivateRoute from "./pages/Auth/PrivateRoute";
import EmailVerification from "./pages/Auth/EmailVerification";
import { useLoading } from './context/LoadingContext';

// Import error and loading components
import RouteErrorBoundary from './components/common/RouteErrorBoundary';
import LoadingScreen from './components/common/LoadingScreen';
import NotFoundScreen from './components/common/NotFoundScreen';
import ChatWelcome from "./components/merchant/Chat/ChatWelcome";
import ChatMessages from "./components/merchant/Chat/ChatMessages";
import LayoutDashboard from "./utils/LayoutDashboard";

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
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleStart = () => {
      showLoading();
    };
    
    const handleComplete = () => {
      hideLoading();
    };
    
    handleStart();
    
    // Simulate navigation delay
    const timer = setTimeout(() => {
      handleComplete();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname, showLoading, hideLoading]);
  
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen while app is initializing
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <Router>
      <RouteChangeHandler />
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={
          <ErrorBoundaryWrapper>
            <LayoutAuth />
          </ErrorBoundaryWrapper>
        } errorElement={<RouteErrorBoundary />}>
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
          <ErrorBoundaryWrapper>
            <LayoutLanding />
          </ErrorBoundaryWrapper>
        } errorElement={<RouteErrorBoundary />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/SearchResult" element={<SearchResult />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoute />} errorElement={<RouteErrorBoundary />}>
          <Route path="/" element={
            <ErrorBoundaryWrapper>
              <LayoutDashboard />
            </ErrorBoundaryWrapper>
          }>
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
        <Route path="/ordering-billing" element={<OrderBilling />} errorElement={<RouteErrorBoundary />} />

        {/* Google Callback Route */}
        <Route path="/auth/callback" element={<GoogleCallback />} errorElement={<RouteErrorBoundary />} />

        {/* 404 Route - Must be last */}
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default App;



