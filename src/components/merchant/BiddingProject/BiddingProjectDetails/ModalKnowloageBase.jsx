import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MdOutlineDeleteOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import csv from "../../../../assets/icons/csv.svg";
import pdf from "../../../../assets/icons/pdf.svg";
import doc from "../../../../assets/icons/doc.svg";
import { RiUploadCloud2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
function ModalKnowloageBase({ stopPropagation, setknowloadgebase }) {
  const items = [
    {
      src: csv,
      title: "one.csv",
    },
    {
      src: pdf,
      title: "two.pdf",
    },
    {
      src: doc,
      title: "three.doc",
    },
    {
      src: doc,
      title: "untitld.doc",
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div
      className=" relative bg-white rounded-xl p-5 min-w-[70%] lg:min-h-[80vh] overflow-auto"
      onClick={stopPropagation}
    >
      <header className=" lg:flex  p-6">
        <h1 className=" text-dark font-bold text-2xl flex-grow">
          Choose From Knowledge Base
        </h1>
        <span
          className=" flex items-center gap-2  justify-end   cursor-pointer text-primary underline py-3"
          onClick={() => setknowloadgebase(false)}
        >
          Knowledge Base <FaArrowRightLong />{" "}
        </span>
      </header>
      <main className=" flex flex-col gap-2">
        <div className=" flex-grow ">
          <div className="grid h-full overflow-y-auto py-6 mt-6 lg:mx-16 mx-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="pt-4 pb-0 rounded-xl bg-[#E7E7E7] relative"
              >
                <div className="flex px-5 justify-end text-gray-500 text-md gap-2">
                  <button className="hover:text-blue-500 transition duration-300">
                    <MdOutlineModeEditOutline />
                  </button>
                  <button className="hover:text-red-500 transition duration-300">
                    <MdOutlineDeleteOutline />
                  </button>
                  <button
                    className="hover:text-blue-500 transition duration-300 relative"
                    onClick={() => toggleDropdown(index)}
                  >
                    <PiDotsThreeOutlineFill />
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute right-0 mt-5 w-32 bg-white rounded-md  shadow-custom z-10">
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

                <div className="py-6 flex justify-center items-center">
                  <img src={item.src} className="w-[80px]" alt={item.title} />
                </div>

                <div className="text-dark text-md font-poppins font-[600] p-3 py-4 rounded-b-xl bg-[#F5F5F5]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="  lg:absolute bottom-7  right-7 flex justify-end gap-5 ">
          <button>Cancel</button>
          <button className=" bg-primary text-white min-w-[130px] py-3    rounded-xl">
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}

export default ModalKnowloageBase;
