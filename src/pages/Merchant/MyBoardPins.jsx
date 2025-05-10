import React, { useState, useEffect } from 'react';
import { useGetUserProfileQuery } from '../../services/userApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your components
import MerchantsConnect from '../../components/merchant/myboard/MerchantsConnect';
import ProductionGroups from '../../components/merchant/myboard/ProductionGroups';
import ProjectTsks from '../../components/merchant/myboard/ProjectTsks';
import Recents from '../../components/merchant/myboard/Recents';
import Reminder from '../../components/merchant/myboard/Reminder';
import Table from '../../components/merchant/myboard/table';
import TaskModal from '../../components/merchant/myboard/TaskModal';
import ManageCardSideBar from '../../components/merchant/myboard/MangeCardSideBar';
import WelcomeModal from '../../components/merchant/WelcomeModal';
import InprogressProject from '../../components/merchant/myboard/InprogressProject';

export default function MyBoardPins() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: userProfile, isLoading, error } = useGetUserProfileQuery();

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Add error handling
  useEffect(() => {
    if (error.status == 404 ) {
      console.error("Error fetching user profile:", error);
  
    }
  }, [error]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Get user name from profile or use default
  const userName = userProfile?.first_name || "User";

  return (
    <div className="flex flex-col gap-6 mx-auto">
      <ToastContainer />
      {/* Add a console log to verify the component is rendering */}
 
      <WelcomeModal />
      <div className='py-3 lg:flex justify-center items-center gap-2'>
        <ManageCardSideBar isOpenMangeCard={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <TaskModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
        <div className='flex-grow px-5'>
          <h5 className='text-[#1E1E1E] font-[500] text-[30px]'>Hey, {userName} 👋</h5>
          <p className='text-[#1E1E1E] font-[400] text-[15px]'>What would you like to create today?</p>
        </div>
      </div>

      <div className='py-5 md:mx-5 grid grid-cols-12 gap-5'>
        <div className='relative shadow-custom rounded-xl md:col-span-6 col-span-12 px-5'>
          <InprogressProject />
        </div>

        <div className='shadow-custom rounded-xl md:col-span-6 col-span-12 px-5'>
          <div className="relative overflow-x-auto sm:rounded-lg">
            <Table />
          </div>
        </div>

        <div className='w-full shadow-custom rounded-xl col-span-12 px-5'>
          <ProjectTsks />
        </div>

        <div className='shadow-custom rounded-xl md:col-span-6 col-span-12 px-5'>
          <div className='relative'>
            <Recents />
          </div>
        </div>

        <div className='shadow-custom relative rounded-xl md:col-span-6 col-span-12 px-5'>
          <Reminder />
        </div>

        <div className='w-full shadow-custom rounded-xl col-span-12 px-5'>
          <ProductionGroups />
        </div>
      </div>
    </div>
  );
}





