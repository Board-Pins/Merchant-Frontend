import React, { useState } from 'react';
import iconTask from "../../../assets/icons/Icon  Bank.png";
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import CustomSelectButton from '../atoms/commonatoms/CustomSelectButton';
import { Table } from '@mui/material';
import TableProjectTasks from './TableProjectTasks';
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectTsks() {
  const [selectedButton, setSelectedButton] = useState('ALL');

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };


  const getButtonClass = (id) => {
    if (selectedButton === id) {
      return 'border-[#6161FF] border-[1px] bg-white';
    } else if (selectedButton === null) {
      return 'text-[#8C8585] bg-[#FAFAFA]';
    } else {
      return 'text-[#8C8585] bg-[#FAFAFA]';
    }
  };

  return (
    <div className=' '>
      <div className='py-5 items-center gap-2 flex relative'>
        <img src={iconTask} className="w-[45px] p-3 h-[45px] bg-[#D9D9D9] rounded-xl" alt="Task Icon" />
        <div>
          <h3 className="font-[400] text-[22px]">Project Tasks</h3>
        </div>
        <div className='flex end-0 absolute'>
          <button className='w-[25px]'>
            <img src={icon_edit} alt="Edit Icon"/>
          </button>
          <button className='w-[25px]'>
            <img src={icon_setting} alt="Setting Icon"/>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className=' md:col-span-8 col-span-12'>
          <div className='my-5 gap-1 flex'>
            <button
              onClick={() => handleButtonClick('ALL')}
              className={`text-[9px] md:text-[14px] py-1 px-5 rounded-2xl ${getButtonClass('ALL')}`}
            >
              ALL
            </button>
            <button
              onClick={() => handleButtonClick('Merchant1')}
              className={`text-[9px] md:text-[14px] py-1 px-5 rounded-2xl ${getButtonClass('Merchant1')}`}
            >
              Merchant 1
            </button>
            <button
              onClick={() => handleButtonClick('Merchant2')}
              className={`text-[9px] md:text-[14px] py-1 px-5 rounded-2xl ${getButtonClass('Merchant2')}`}
            >
              Merchant 2
            </button>
            <button
              onClick={() => handleButtonClick('Merchant3')}
              className={`text-[9px] md:text-[14px] py-1 px-5 rounded-2xl ${getButtonClass('Merchant3')}`}
            >
              Merchant 3
            </button>
            </div>
            
</div>
            <div className='  items-center flex md:col-span-4 flex  z-50 col-span-12 gap-4 justify-center  '>
            <CustomSelectButton options={options}  onSelect={handleSelect}  defaultText="Assigned to me"/>
            <CustomSelectButton options={options}  onSelect={handleSelect}  defaultText="sort"/>
            </div>


      </div>
      <div className=' mt-12   relative overflow-x-auto  '>
            
      <TableProjectTasks/>    
      <div className=' w-full  py-5 justify-center flex'>
      
      <button className=' flex flex-column items-center text-[#6161FF]'>
<span className=' px-3'>Show Project</span>
      <FaArrowRightLong/>
      </button>
      
      </div>
      </div>
    </div>
  );
}

export default ProjectTsks;
