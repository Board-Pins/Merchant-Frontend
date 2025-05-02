import { useState } from 'react';
import InprogressProject from '../../components/provider/myboard/InprogressProject';

import MerchantsConnect from '../../components/provider/myboard/MerchantsConnect';
import ProductionGroups from '../../components/provider/myboard/ProductionGroups';
import ProjectTsks from '../../components/provider/myboard/ProjectTsks';
import Recents from '../../components/provider/myboard/Recents';
import Reminder from '../../components/provider/myboard/Reminder';
import Table from '../../components/provider/myboard/table';
import TaskModal from '../../components/provider/myboard/TaskModal';
import ManageCardSideBar from '../../components/provider/myboard/MangeCardSideBar';
import WelcomeModal from '../../components/provider/WelcomeModal';

function MyBoardPins() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='bg-white rounded-[30px] px-3 font-poppins shadow'>
 
      <WelcomeModal/>
      <div className='py-3 lg:flex justify-center items-center gap-2'>
        <ManageCardSideBar isOpenMangeCard={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <TaskModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)
            
          }
        />
        <div className='flex-grow px-5'>
          <h5 className='text-[#1E1E1E] font-[500] text-[30px]'>Hey, Kirolos 👋</h5>
          <p className='text-[#1E1E1E] font-[400] text-[15px]'>What would you like to create today?</p>
        </div>

        <div className='flex gap-4 lg:mt-5 lg:mx-12 mt-6 justify-center col-span-12'>
          <button
            className="bg-[#6161FF] my-2 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5"
            onClick={() => setModalIsOpen(true)}
          >
            Add Task
          </button>
          <button
            className='bg-[#6161FF] my-2 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5'
            onClick={toggleSidebar}
          >
             Manage Cards
          </button>
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

export default MyBoardPins;
