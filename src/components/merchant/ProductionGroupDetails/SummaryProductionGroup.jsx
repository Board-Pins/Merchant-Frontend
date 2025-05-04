import React from "react";
import { FaLongArrowAltRight, FaRegPauseCircle } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

function SummaryProductionGroup() {
  const items = [
    {
      icon: <TbTargetArrow size={40} className="text-dark p-2 rounded-full bg-[#9191912b]" />,
      value: "1600 from 2000",
      description: "Target Quantity Number",
    },
    {
      icon: <IoPersonSharp size={40} className="text-dark p-2 rounded-full bg-[#9191912b]" />,
      value: "3 merchants applied",
      description: "Merchant Number",
    },
    {
      icon: <TbTargetArrow size={40} className="text-dark p-2 rounded-full bg-[#9191912b]" />,
      value: "Footwear",
      description: "Category",
    },
  ];

  return (
    <div className="bg-[#F5F6FA] rounded-xl p-6 mx-4 font-poppins">
      <div className="lg:flex justify-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 flex-grow gap-5">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <div>
                <h1 className=" text-dark text-sm">
                  <span className="text-lg font-bold">{item.value}</span>
                </h1>
                <p className="text-[#919191] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 items-center justify-end mt-5">
          <button className="flex text-[#898989] text-sm items-center gap-1">
            <FaRegPauseCircle /> Stop Now
          </button>
          <button className="py-3 bg-white rounded-lg gap-1 flex items-center text-sm px-5 text-[#6161FF]">
            <FaLongArrowAltRight /> Move to in progress
          </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryProductionGroup;
