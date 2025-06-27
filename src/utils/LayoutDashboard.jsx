import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/merchant/NavbarProvider';
import Sidebar from '../components/merchant/Sidebar/SidebarProvider';
import Invite from '../components/merchant/Invite/Invite';
import WelcomeModal from '../components/merchant/WelcomeModal';
import { useGetUserProfileQuery } from '../services/userApi';

const LayoutDashboard = () => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(true);
  const { data: profileData, error: profileError, isLoading: loadingProfile } = useGetUserProfileQuery();

  const handleInviteOpen = () => {
    setIsInviteOpen(true);
  };

  const handleInviteClose = () => {
    setIsInviteOpen(false);
  };

  // Only show WelcomeModal if profile does not exist or is not approved
  const profileStatus = profileData?.data?.current_status;
  const shouldShowWelcome =
    isProfileModalOpen &&
    (profileError?.status === 404 || !profileData?.data || profileStatus !== 'approved');

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F6FA] relative">
      <Sidebar className="z-10" handleIsopen={handleInviteOpen} />
      <div className="flex flex-col flex-1">
        <Invite isOpen={isInviteOpen} handleIsclose={handleInviteClose} />

        {/* Profile creation/pending modal */}
        {shouldShowWelcome && (
          <WelcomeModal
            isOpen={shouldShowWelcome}
            handleIsClose={isProfileModalOpen => setIsProfileModalOpen(isProfileModalOpen)}
          />
        )}

        <Navbar className="z-20" />
        <div
          className="flex-1 h-full outline-0 rounded-2xl mx-6 bg-[#ffffff] overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 #ffffff",
          }}
        >
          <Outlet />
        </div>
      </div>
      {/* <DevInfo /> */}
    </div>
  );
};

export default LayoutDashboard;
