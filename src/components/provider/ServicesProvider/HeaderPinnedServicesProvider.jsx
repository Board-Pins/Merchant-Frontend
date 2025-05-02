import React from 'react';
import FilterIcon from '../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import Dropdown from '../atoms/commonatoms/Dropdown';

const HeaderPinnedServicesProvider = ({ activeButton, setActiveButton }) => {
  const sortItems = ['Alphabetical', 'Newest', 'Oldest', 'Popular'];

  const buttonStyles = (isActive) => 
    `border rounded-xl px-3 py-1 ${isActive ? 'border-[#6161FF] text-[#6161FF]' : 'bg-[#FAFAFA] text-[#8C8585]'}`;

  return (
    <>
      <div className='flex justify-end gap-3 flex-wrap lg:justify-between'>
        <div className='flex gap-2 flex-grow'>
          <Dropdown items={sortItems} title="Sort By" />
          <div className='flex items-center text-sm gap-3 ms-5'>
            {['All Pinned', 'collection'].map((btn) => (
              <button
                key={btn}
                className={buttonStyles(activeButton === btn)}
                onClick={() => setActiveButton(btn)}
              >
                {btn === 'All Pinned' ? 'All pinned' : 'Collection'}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button className='rounded-3xl shadow-custom w-[100px] flex items-center gap-1 px-5 py-2'>
            <img src={FilterIcon} alt="Filter" />
            Filter
          </button>
        </div>
      </div>
      <h1 className='text-dark mt-3 font-bold text-2xl font-popines'>
        {activeButton}
      </h1>
    </>
  );
};

export default HeaderPinnedServicesProvider;
