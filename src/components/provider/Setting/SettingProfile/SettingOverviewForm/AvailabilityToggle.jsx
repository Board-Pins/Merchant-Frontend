import React from "react";
import { FaCircle } from "react-icons/fa";

const AvailabilityToggle = ({ isAvailable, toggleAvailability }) => (
  <div
    className={`bg-[#F5F5F5] py-1 px-2 flex rounded-3xl items-center gap-2 text-sm cursor-pointer transition-all duration-200 ease-in-out ${
      isAvailable ? "text-[#52CD8F]" : "text-black"
    }`}
    onClick={toggleAvailability}
  >
    <div
      className={`flex items-center gap-2 transition-all duration-100 ease-in-out ${
        isAvailable ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <FaCircle
        className={`transition-all duration-100 ease-in-out ${
          isAvailable ? "text-[#52CD8F]" : "text-[#F28888]"
        }`}
        size={30}
      />
      <span className="text-[12px] font-bold">
        {isAvailable ? "Availability" : "Not Available"}
      </span>
    </div>
  </div>
);

export default AvailabilityToggle;
