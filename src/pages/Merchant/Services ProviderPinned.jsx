import React, { useState } from 'react';
import correct from '../../assets/icons/Group 165.svg';
import StyledPagination from '../../components/merchant/atoms/commonatoms/StyledPagination';
import PinnedCards from '../../components/merchant/ServicesProvider/PinnedCards';
import HeaderPinnedServicesProvider from '../../components/merchant/ServicesProvider/HeaderPinnedServicesProvider';
import PinnedCollections from '../../components/merchant/ServicesProvider/PinnedCollections';

function MerchantPinned() {
  const [activeButton, setActiveButton] = useState('All Pinned');

  return (
    <div className="bg-white rounded-lg py-6 px-8 z-0 relative overflow-hidden">
      <div className='flex items-center gap-2 mb-12'>
        <img src={correct} className='w-[35px]' alt="Correct Icon" />
        <h3 className='font-bold text-lg'>Pinned Service Providers</h3>
      </div>
      <HeaderPinnedServicesProvider activeButton={activeButton} setActiveButton={setActiveButton} />

      {/** Conditional rendering based on the activeButton state */}
      <main className='py-8 '>
        {activeButton === 'All Pinned' ? (
          <>
            <PinnedCards />
            <div className='w-full flex justify-start py-8'>
              <StyledPagination count={10} shape="rounded" />
            </div>
          </>
        ) : (
          <>
            <PinnedCollections />
            <div className='w-full flex justify-start py-8'>
              <StyledPagination count={10} shape="rounded" />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default MerchantPinned;
