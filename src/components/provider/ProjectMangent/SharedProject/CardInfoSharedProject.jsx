import { useState } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import icon_chat from "../../../../assets/icons/Frame 1171275911.svg";
import setting from "../../../../assets/icons/Chat.svg";
import { BsCalendarDate } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import ProgressBar from "../../atoms/commonatoms/Progressbar";
function CardInfoSharedProject({
    title,
    role,
    phone,
    imgSrc,
    progress,
    startDate,
    dueDate,
  }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleDropdownItemClick = (action) => {
      console.log(action);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="rounded-2xl shadow-custom bg-white relative p-4 pt-0 ">
        <div className="relative">
          <button onClick={toggleDropdown}>
            <img
              src={setting}
              alt="Settings"
              className="w-4 h-4 end-0 absolute mx-5 mb-4"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md  shadow-custom z-10">
              <ul className="py-1">
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownItemClick("Edit")}
                >
                  Edit
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownItemClick("Delete")}
                >
                  Delete
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownItemClick("Share")}
                >
                  Share
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
        <div className="py-2 w-full text-end">
          <span className="w-full justify-end text-end text-gray-600 text-xs">
            {progress} %
          </span>
          <ProgressBar progress={progress} bgColor="#52CD8F" />
        </div>
        <div className="flex w-full items-center gap-1 mt-2">
          <div className="text-[9px] items-start w-full flex text-[#292D3240] py-1 rounded-2xl">
            <CiClock2 size={15} />
            {startDate}
          </div>
          <div className="flex text-[9px] gap-1 items-start w-full">
            <BsCalendarDate color="#52CD8F" size={15} />
            {dueDate}
          </div>
        </div>
      </div>
    );
  }
  
  export default CardInfoSharedProject;
  