import { useState } from 'react';
import correct from '../../assets/icons/Group 165.png'
import StyledPagination from '../../components/provider/atoms/commonatoms/StyledPagination';

import MerchantCards from '../../components/provider/ServicesProvider/ServicesProviderCards';
import HeaderSharedProjects from '../../components/provider/ProjectMangent/HeaderSharedProjects';
import AddNewProjectModal from '../../components/provider/ProjectMangent/SharedProject/AddNewProjectModal';
import SharedProjectCards from '../../components/provider/ProjectMangent/SharedProject/SahredProjectCards';

function SharedProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className='flex items-center gap-2 mb-12'>
        <img src={correct} className='w-[35px]' />
        <h3 className='font-bold text-lg'>Projects</h3>
      </div>
    
     <header className=' lg:mx-9'> <HeaderSharedProjects handleOpenModal={handleOpenModal} /></header>
      <main className='py-8 lg:mx-12'>
        
        <SharedProjectCards/>
        <div className='w-full flex justify-center py-8'>
          <StyledPagination count={10} shape="rounded" />
        </div>
      </main>
      <AddNewProjectModal isOpen={isModalOpen} onClose={handleCloseModal}  />
    </div>
  )
}

export default SharedProjects;
 