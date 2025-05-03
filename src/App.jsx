import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ChatWelcome from "./components/provider/Chat/ChatWelcome";
import ChatMessages from "./components/provider/Chat/ChatMessages";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import EmailVerification from "./pages/Auth/EmailVerification";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Auth Routes */}
        <Route path="/" element={<LayoutAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset/emails" element={<NewPassword />} />
          <Route path="/verifymail" element={<VerifyMail />} />
          <Route path="/emails/reset/" element={<NewPassword />} />
          <Route path="/recoverysuccess" element={<RecoverySuccess />} />
          <Route path="/emails/verify" element={<EmailVerification />} />
        </Route>
       
        {/* Landing Routes */}
        <Route path="/" element={<LayoutLanding />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/SearchResult" element={<SearchResult />} />
        </Route>
    
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
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

      </Routes>
    </Router>
  );
};

export default App;
