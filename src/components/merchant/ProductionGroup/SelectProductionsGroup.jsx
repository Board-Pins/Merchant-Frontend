import React, { useState } from 'react';
import Filter from '../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import list from '../../../assets/icons/listleft.svg';

function SelectProductionsGroup() {
  const [selected, setSelected] = useState('ALL');

  const buttons = [
    { name: 'ALL', label: 'All' },
    { name: 'Footwear', label: 'Footwear' },
    { name: 'Apparel', label: 'Apparel' },
    { name: 'Accessories', label: 'Accessories' },
    // Add more buttons if needed
  ];

  const getButtonClasses = (buttonName) => {
    return selected === buttonName
      ? 'px-5 rounded-3xl bg-[#6161FF] text-white py-2'
      : 'px-5 rounded-3xl text-[#6161FF] bg-white py-2';
  };

  return (
    <div className='lg:flex mx-1 py-6'>
      <div className='flex-grow gap-3 lg:justify-start justify-center'>
        {buttons.map((button) => (
          <button
            key={button.name}
            className={getButtonClasses(button.name)}
            onClick={() => setSelected(button.name)}
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className='flex gap-5 justify-end lg:mt-auto mt-6'>
        <button className='flex items-center gap-2'>
          <img src={Filter} alt="Filter icon" />
          Filter
        </button>
        <button className='flex items-center gap-2'>
          <img src={list} alt="Sort icon" />
          Sort
        </button>
      </div>
    </div>
  );
}

export default SelectProductionsGroup;
