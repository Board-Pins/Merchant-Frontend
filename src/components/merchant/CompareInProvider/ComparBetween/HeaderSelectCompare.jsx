import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function HeaderSelectCompare() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };
  return (
    <div>
      <header className=" bg-white rounded-xl py-5 flex px-5 gap-5 items-center  w-full">
        <div className=" flex items-center px-3 w-full gap-1 bg-[#F9F9F9] rounded-lg">
          <IoSearchOutline size={22} color="#666666" />
          <input
            type="text"
            className=" py-2 w-full flex-grow px-4  bg-[#F9F9F9] outline-none "
            placeholder="Payment gateways"
          />
        </div>
        <div className="flex gap-2 items-center relative">
          <div>
            <button
              className="flex items-center gap-1 bg-white shadow-xl text-sm font-medium border border-gray-100 text-primary rounded-xl p-4 py-2"
              onClick={toggleCategoriesDropdown}
            >
              Categories{" "}
              {isCategoriesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isCategoriesOpen && (
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-40 p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Category 1
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Category 2
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Category 3
                </li>
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
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Service 1
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Service 2
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Service 3
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderSelectCompare;
