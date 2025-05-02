import React, { useState } from "react";
import Modal from "../../atoms/commonatoms/Modal";
import HeaderSelectCompare from "./HeaderSelectCompare";
import fawry from "../../../../assets/images/provider/fawry.png";
import { FaMinus } from "react-icons/fa";
import ProgressRing from "../../atoms/commonatoms/ProgressRing";

function SelectCompare({ isModalOpen, handleCloseModal, onApply }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelect = (id) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(id)) {
        return prevSelectedCards.filter((cardId) => cardId !== id);
      } else {
        return [...prevSelectedCards, id];
      }
    });
  };

  const itemsCard = [
    { src: fawry, title: "Fawry", precent: 80, id: 1 },
    { src: fawry, title: "Fawry", precent: 60, id: 2 },
    { src: fawry, title: "Fawry", precent: 90, id: 3 },
    { src: fawry, title: "Fawry", precent: 80, id: 4 },
  ];

  const handleApply = () => {
    const selectedItems = itemsCard
      .filter((item) => selectedCards.includes(item.id))
      .map((item) => item);
    onApply(selectedItems); // Pass the array of selected images
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        className="lg:w-[70%] bg-transparent"
        onClose={handleCloseModal}
      >
        <HeaderSelectCompare />
        <main className="py-5 rounded-xl bg-white h-[600px] font-poppins overflow-y-auto p-5 mt-4">

<div className="  mx-4 px-8 py-12 bg-[#F9F9F9] rounded-lg">
<h1 className=" text-3xl  font-[800] my-3 text-[#292D32] font-poppins">Choose and start Comparison!</h1>
<p className=" font-poppins text-[#A2A5A8]">Now  you can compare  between every service providers to find the best for your business</p>
</div>

          <div className="flex w-full justify-end">
            <button
              className={`py-2 rounded-lg font-poppins m-5 px-5 ${
                selectedCards.length === 0
                  ? "opacity-0"
                  : "bg-primary text-white"
              }`}
              onClick={handleApply}
            >
              Compare
            </button>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 justify-center px-4">
            {itemsCard.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg p-5 flex flex-col gap-2 ${
                  selectedCards.includes(item.id)
                    ? "bg-[#E3E3E3]"
                    : "bg-[#F9F9F9]"
                }`}
                onClick={() => handleSelect(item.id)}
              >
                <img src={item.src} alt={item.title} />
                <div className="flex items-center gap-2">
                  <div className="relative   flex items-center ">
                    <ProgressRing
                      radius={22}
                      stroke={4}
                      progress={item.precent}
                      color="#6161FF"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      <span className=" text-[#6161FF] text-[10px]">{item.precent}%</span>  
                    </div>
                  </div>
                  <div className="flex-grow  font-[600] text-[#4D4D4D]  font-poppins">
                    {item.title}
                  </div>
                  {selectedCards.includes(item.id) ? (
                    <button
                      className="bg-white rounded-full flex items-center justify-center p-2 text-[#6161FF]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(item.id);
                      }}
                    >
                      <FaMinus />
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </main>
      </Modal>
    </div>
  );
}

export default SelectCompare;
