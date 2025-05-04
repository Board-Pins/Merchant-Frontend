import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import Modal from "../../components/merchant/atoms/commonatoms/Modal";
import SelectCompare from "../../components/merchant/CompareInProvider/ComparBetween/SelectCompare";
import ProgressRing from "../../components/merchant/atoms/commonatoms/ProgressRing";
import { MinimizeOutlined, MinimizeRounded } from "@mui/icons-material";
import { FaMinus } from "react-icons/fa";

function CompareBetween() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]); // Array to hold selected images

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleApplySelection = (itemcard) => {
    setSelectedItems(itemcard); // Set the selected images
    console.log(itemcard);
    handleCloseModal(); // Close the modal
  };

  return (
    <div className="bg-white min-h-full p-6 rounded-xl flex justify-center items-center font-poppins">
      <div>
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col flex-wrap lg:flex-row items-center gap-6">
            {/* Display comparison images dynamically */}
            {selectedItems.map((item, index) => (
              <div className=" flex items-center" key={`${index}`}>
                {/* Spacer with 'vs' between items */}
                {index !== 0 && (
                  <div className="border-l-[2px] lg:h-[150px] md:h-[150px] h-[60px] relative mx-5 my-2 flex justify-center items-center">
                    <span className="rounded-full text-sm bg-[#D9D9D9] px-3 py-2 text-gray-500 z-30 absolute">
                      vs
                    </span>
                  </div>
                )}
                <div className="flex flex-col items-center relative">
                  <div className=" w-full flex   justify-end px-6 absolute">               <FaMinus className=" rounded-full border font-bold border-[#FFB8B8] bg-white p-1" size={20} color="#FFB8B8" /></div>
                  <div className="compare border border-gray-200 bg-[#EDEDED] rounded-full lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] flex justify-center items-center">

                    <img
                      src={item.src}
                      alt={`Selected ${index}`}
                      className="rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="relative   flex items-center ">
                      <ProgressRing
                        radius={22}
                        stroke={4}
                        progress={item.precent}
                        color="#6161FF"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                        <span className=" text-[#6161FF] text-[10px]">
                          {item.precent}%
                        </span>
                      </div>
                    </div>
                    <div className=" text-[#4D4D4D]  font-bold w-[100px] h-[20px]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Display empty slots */}
            {Array.from({ length: 1 - selectedItems.length }).map(
              (_, index) => (
                <div className=" flex items-center" key={`empty-${index}`}>
                  {/* Spacer with 'vs' between images */}

                  <div className="flex flex-col items-center">
                    <div
                      className="compare bg-[#EDEDED] rounded-full lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] flex justify-center items-center"
                      onClick={handleOpenModal}
                    >
                      <div className="text-center text-xs text-gray-300 font-semibold flex flex-col items-center">
                        <GoPlusCircle size={20} />
                        <p className="w-[75%]">Choose anything to start</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="rounded-full bg-[#DBDBDB] w-[30px] h-[30px]"></div>
                      <div className="rounded-full bg-[#DBDBDB] w-[100px] h-[20px]"></div>
                    </div>
                  </div>

                  <div className="border-l-[2px] lg:h-[150px] md:h-[150px] h-[60px] relative mx-5 my-2 flex justify-center items-center">
                    <span className="rounded-full text-sm bg-[#D9D9D9] px-3 py-2 text-gray-500 z-30 absolute">
                      vs
                    </span>
                  </div>
                </div>
              )
            )}
            <div className="flex flex-col items-center">
              <div
                className="compare bg-[#EDEDED] rounded-full lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] flex justify-center items-center"
                onClick={handleOpenModal}
              >
                <div className="text-center text-xs text-gray-300 font-semibold flex flex-col items-center">
                  <GoPlusCircle size={20} />
                  <p className="w-[75%]">Choose anything to start</p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="rounded-full bg-[#DBDBDB] w-[30px] h-[30px]"></div>
                <div className="rounded-full bg-[#DBDBDB] w-[100px] h-[20px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-6 mt-12 bg-[#D9D9D921] rounded-xl text-xl text-[#CDCDCD]">
          <div className="lg:w-[80%]">
            Choose any Service Provider or Freelancer/ Influencer to show
            details here
          </div>
          <div className="py-2 rounded-xl bg-[#EDEDED] mt-5"></div>
          <div className="py-1 rounded-xl mt-2 bg-[#EDEDED] w-1/2"></div>
        </div>
      </div>
      <SelectCompare
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        onApply={handleApplySelection}
      />
    </div>
  );
}

export default CompareBetween;
