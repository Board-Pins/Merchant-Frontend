import React, { useState } from 'react';
import  Filter  from '../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import list from '../../../assets/icons/listleft.svg'
function HeaderServiceProvider() {
  const [selected, setSelected] = useState('ALL');

  const getButtonClasses = (buttonName) => {
    return selected === buttonName
      ? 'px-5 rounded-3xl bg-[#6161FF] text-white py-2'
      : 'px-5 rounded-3xl text-[#6161FF] bg-white py-2';
  };

  return (
    <div className=' lg:flex '>
      <div className='flex-grow gap-3 lg:justify-start justify-center  '>
        <button
          className={getButtonClasses('ALL')}
          onClick={() => setSelected('ALL')}
        >
          All
        </button>
        <button
          className={getButtonClasses('Pending')}
          onClick={() => setSelected('Pending')}
        >
          Pending
        </button>
        <button
          className={getButtonClasses('Declined')}
          onClick={() => setSelected('Declined')}
        >
          Declined
        </button>
      </div>


      <div className=' flex gap-5 justify-center lg:mt-auto mt-6'>
      <button
 className=' flex items-center gap-2'
    >
    <img src={Filter}/>
    Filter
    </button>
    <button
  className=' flex items-center gap-2'
    >
    <img src={list}/>
    Sort
    </button>
      
      </div>
    </div>
  );
}

export default HeaderServiceProvider;
