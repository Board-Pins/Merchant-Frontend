import React, { useState } from "react";
import { IoPersonRemove } from "react-icons/io5";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import imgIcon from '../../../assets/icons/Ellipse 232.png';

const merchants = [
  {
    name: "Mohamed Adel",
    rating: 4,
    role: "Software Engineer",
    timeAgo: "2 hours ago",
  },
  {
    name: "Mohamed Farg",
    rating: 4,
    role: "Software Engineer",
    timeAgo: "2 hours ago",
  },
  {
    name: "Mohamed Kareem",
    rating: 4,
    role: "Test Engineer",
    timeAgo: "2 hours ago",
  },
];

const Header = ({ handleSelectAll, isSelectedAll }) => (
  <header className="py-5 grid grid-cols-12 items-center gap-2 flex-row relative">
    <div className="col-span-12 md:col-span-5 flex items-center gap-2">
      <input
        type="checkbox"
        checked={isSelectedAll}
        onChange={handleSelectAll}
        className="form-checkbox"
      />
      <h3 className="  text-sm  text-gray-700 px-3">Select all</h3>
      
    </div>
    <div className="col-span-12 md:col-span-3 lg:flex md:flex mx-3 gap-12 text-[#AAAAAA] hidden">
      <span>Contact</span>
      <span>Quantity</span>
    </div>
    <div className="col-span-12 md:col-span-4 flex justify-center">
      {/* Add any other content needed here */}
    </div>
  </header>
);

const MerchantInfo = ({ name, rating, role, timeAgo, isSelected, handleCheckboxChange }) => (
  <div className="col-span-12 md:col-span-5">
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="form-checkbox"
      />
      <img src={imgIcon} className="rounded-full w-[45px] h-[45px]" alt="Merchant Icon" />
      <div className="text-[#404040]">
        <div className="p-2">
          <div className="flex gap-4 items-center">
            <h2 className="text-md font-[500]">{name}</h2>
            <div className="flex rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < rating ? "#FFC229" : "#D9D9D9"} />
              ))}
            </div>
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="gap-5 flex">
            <div className="text-sm text-[#919191]">{role}</div>
            <div className="text-sm text-[#919191]">{timeAgo}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Actions = () => (
  <div className="col-span-12 md:col-span-3 flex items-center gap-5 mt-3 md:mt-0">
    <div className="flex gap-3">
      <button className="rounded-2xl text-white px-5 md:px-9 py-1 bg-[#52CD8F]">
        <FaWhatsapp />
      </button>
      <button className="rounded-2xl font-bold text-[#000000] md:px-9 px-3 py-1 bg-[#D9D9D9]">
        500
      </button>
    </div>
  </div>
);

const ProjectActions = () => (
  <div className="col-span-12 md:col-span-4 flex items-center gap-3 mt-3 md:mt-0">
    <div className="font-medium text-sm text-[#6161FF]">
      Create project with this merchant
    </div>
    <button className="font-medium flex items-center gap-2 text-[#FF111199]">
      <IoPersonRemove />
      Remove
    </button>
  </div>
);

function AppliedMerchantsDetails() {
  const [selectedMerchants, setSelectedMerchants] = useState(
    merchants.map(() => false)
  );

  const handleSelectAll = () => {
    const newSelection = selectedMerchants.every((selected) => selected)
      ? selectedMerchants.map(() => false)
      : selectedMerchants.map(() => true);
    setSelectedMerchants(newSelection);
  };

  const handleCheckboxChange = (index) => {
    const newSelection = [...selectedMerchants];
    newSelection[index] = !newSelection[index];
    setSelectedMerchants(newSelection);
  };

  return (
    <div className="p-4 font-poppins">
      <Header
        handleSelectAll={handleSelectAll}
        isSelectedAll={selectedMerchants.every((selected) => selected)}
      />
      <main>
        <div className="py-6 grid grid-cols-12 gap-4 max-w-full overflow-x-auto">
          {merchants.map((merchant, index) => (
            <React.Fragment key={index}>
              <MerchantInfo
                {...merchant}
                isSelected={selectedMerchants[index]}
                handleCheckboxChange={() => handleCheckboxChange(index)}
              />
              <Actions />
              <ProjectActions />
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AppliedMerchantsDetails;
