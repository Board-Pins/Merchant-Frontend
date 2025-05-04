import React, { useState } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import icon_chat from "../../../assets/icons/Frame 1171275911.svg";
import setting from "../../../assets/icons/Chat.svg";

function CardsInfo({ title, role, phone, imgSrc, status, itemsCategories }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="rounded-2xl shadow-custom bg-white relative p-5 py-4">
      <div className="absolute top-4 right-4">
        <button onClick={toggleDropdown} className="relative">
          <img
            src={setting}
            alt="Profile Pic"
            className="w-4 h-4"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-custom z-10">
            <ul className="py-1">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Action 1
              </li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Action 2
              </li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Action 3
              </li>
            </ul>
          </div>
        )}
      </div>

      <img src={imgSrc} alt="Profile Pic" className="w-16 h-16 mb-4" />
      <div className="my-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="">{role}</p>
      </div>

      <div className="flex flex-wrap  gap-4">
        {itemsCategories.map((item, key) => (
          <div key={key} className="py-1">
            <span className="px-3 border-[1px] border-[#6161FF] text-[#6161FF] rounded-3xl flex">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-0 ">
    
        <div className="flex gap-3 w-full justify-end">
          <button className="rounded-full bg-[#52CD8F] flex justify-center items-center w-[35px] h-[35px]">
            <MdOutlineWhatsapp color="white" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsInfo;
