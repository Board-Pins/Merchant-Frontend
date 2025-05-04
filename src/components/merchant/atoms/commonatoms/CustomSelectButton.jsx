import  { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const CustomSelectButton = ({ options, onSelect, defaultText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        className="flex relative items-center border-[1px] border-[#E8E8E8] bg-[#FAFAFA] rounded-lg lg:min-w-[120px] min-w-[150px]  text-center py-2"
        onClick={handleButtonClick}
      >
      <div className=' text-center  text-[12px] px-4 md:px-2'>
      {selectedOption}
      </div>
     
        <div className='  end-0 px-2  absolute '>
        {isOpen ? <IoIosArrowUp color="#6161FF" /> : <IoIosArrowDown color="#6161FF" />}
        </div>
      
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelectButton;
