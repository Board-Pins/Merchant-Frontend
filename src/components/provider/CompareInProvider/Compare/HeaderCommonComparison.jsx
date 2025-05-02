import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function HeaderCommonComparison({Showbutton}) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
  
    // Function to handle category change
    const handleCategoryChange = (category) => {
      setActiveCategory(category);
    };
  
    // Function to toggle dropdown visibility
    const toggleCategoriesDropdown = () => {
      setIsCategoriesOpen(!isCategoriesOpen);
    };
  
    const toggleServicesDropdown = () => {
      setIsServicesOpen(!isServicesOpen);
    };
  
  return (
    <div>    <header>
    <div className="flex lg:flex-row flex-col gap-5 lg:justify-between justify-start items-center font-poppins">
      <h1 className="text-xl text-[#292D32] font-bold text-start lg:w-auto w-full">CommonComparison</h1>

      <div className="flex items-center gap-5 flex-wrap">
        {/* Category Buttons */}
        <span
          className={`px-4 py-1 rounded-2xl cursor-pointer ${activeCategory === 'All' ? 'text-white bg-[#6161FF]' : 'text-[#AAAAAA]'}`}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </span>
        <span
          className={`cursor-pointer ${activeCategory === 'Services' ? 'text-white bg-[#6161FF] px-4 py-1 rounded-2xl' : 'text-[#AAAAAA]'}`}
          onClick={() => handleCategoryChange('Services')}
        >
          Services
        </span>
        <span
          className={`cursor-pointer ${activeCategory === 'Freelance' ? 'text-white bg-[#6161FF] px-4 py-1 rounded-2xl' : 'text-[#AAAAAA]'}`}
          onClick={() => handleCategoryChange('Freelance')}
        >
          Freelance
        </span>
        <span
          className={`cursor-pointer ${activeCategory === 'Influencer' ? 'text-white bg-[#6161FF] px-4 py-1 rounded-2xl' : 'text-[#AAAAAA]'}`}
          onClick={() => handleCategoryChange('Influencer')}
        >
          Influencer
        </span>
      </div>

      {/* Dropdown Buttons */}

      {Showbutton? <div className="flex gap-2 items-center relative">
        <div>
          <button
            className="flex items-center gap-1 bg-white shadow-xl text-sm font-medium border border-gray-100 text-primary rounded-xl p-4 py-2"
            onClick={toggleCategoriesDropdown}
          >
            Categories {isCategoriesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {isCategoriesOpen && (
            <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-40 p-2">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Category 1</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Category 2</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Category 3</li>
            </ul>
          )}
        </div>
        <div>
          <button
            className="flex items-center gap-1 bg-white shadow-xl text-primary rounded-xl text-sm font-medium border border-gray-100 p-4 py-2"
            onClick={toggleServicesDropdown}
          >
            Services {isServicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {isServicesOpen && (
            <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-[44%] p-2">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Service 1</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Service 2</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Service 3</li>
            </ul>
          )}
        </div>
      </div>:""}
     
    </div>
  </header></div>
  )
}

export default HeaderCommonComparison