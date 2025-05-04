import React, { useState } from "react";
import BiddongProject from "../../../assets/icons/BiddingProject.svg";
import { MdKeyboardArrowDown } from "react-icons/md";

function HeaderBiddingProject({ toggleSidebar ,title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:flex items-center font-poppins">
        <div className="flex items-center gap-2 flex-grow">
          <img
            src={BiddongProject}
            className="w-[30px] p-1 bg-[#E5E5FF] rounded-lg"
          />
          <h1 className="text-dark font-bold lg:text-2xl text-lg">
          { title}
          </h1>
        </div>

        <div className="relative gap-4 my-5 lg:py-0 flex justify-end lg:w-auto w-full">
          <div>
            <button
              className=" text-[#A2A2A2] items-center flex justify-center gap-2  text-sm py-2  px-3 border border-[#404040] rounded-lg"
              onClick={toggleDropdown}
            >
              <div className="flex-grow">Sort by</div>
              <MdKeyboardArrowDown color="#404040" size={25} />
            </button>
            {isOpen && (
              <div className="absolute right-0 z-40 lg:mt-1 mt-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
          {" "}
          <button
            className="lg:hidden mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={toggleSidebar}
          >
            Open Sidebar
          </button>
        </div>
        </div>
    
      </div>
    </div>
  );
}

export default HeaderBiddingProject;
