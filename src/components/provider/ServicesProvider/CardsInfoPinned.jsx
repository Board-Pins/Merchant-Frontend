import React, { useState } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import icon_chat from "../../../assets/icons/Frame 1171275911.svg";
import setting from "../../../assets/icons/Chat.svg";
import { BsFillPinAngleFill } from "react-icons/bs";
import { Rating } from "@mui/material";

function CardsInfoPinned({ title, role, description,imgSrc, status,reviews, itemsCategories }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="rounded-2xl shadow-custom bg-white relative p-5 py-4">


      <img src={imgSrc} alt="image sevice" className="mb-4  w-full h-[100px]" />
      <div className="my-1">
        <h3 className=" text-md font-bold text-sm">{title}</h3>
<div className="flex text-[12px] items-center gap-1 "> <Rating value={status} sx={{fontSize:"0.6rem"}}/> <span className="text-[#7D7D7D]">{status}</span> ({reviews} Reviews)</div>
        <p className=" text-xs text-[#0000004e] py-1">{description.slice(0,50)}</p>
      </div>

    

      <div className="flex items-center mt-2 ">
      <div className="flex flex-nowrap  gap-1">
        {itemsCategories.map((item, key) => (
          <div key={key} className="py-2">
            <span className="px-3 text-xs py-1 border-[1px] border-[#6161FF] text-[#6161FF] rounded-3xl flex">
              {item}
            </span>
          </div>
        ))}
      </div>
        <div className="flex gap-3 w-full justify-end">
          <button className="rounded-full bg-[#f5f5f5] flex justify-center items-center w-[35px] h-[35px]">
            <BsFillPinAngleFill color="#6161FF" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsInfoPinned;
