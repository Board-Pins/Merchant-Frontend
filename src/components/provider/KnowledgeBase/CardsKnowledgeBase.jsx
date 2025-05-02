import React, { useState } from 'react';
import { MdOutlineDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import csv from '../../../assets/icons/csv.svg';
import pdf from '../../../assets/icons/pdf.svg';
import doc from '../../../assets/icons/doc.svg';
import { RiUploadCloud2Line } from 'react-icons/ri';

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

function CardsKnowledgeBase() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <div>
      <div className="grid h-full overflow-y-auto py-6 mt-6 lg:mx-16 mx-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center">
        {items.map((item, index) => (
          <div key={index} className="pt-4 pb-0 rounded-xl bg-[#E7E7E7] relative">
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

        <div className="py-6 rounded-xl bg-[#F5F5F5] border-[#6161ff6c] border-[3px] border-dashed">
          <div className="py-5 flex justify-center items-center">
            <RiUploadCloud2Line size={25} color="#6161FF" />
          </div>

          <div className="flex flex-col gap-3 text-dark text-sm text-center font-poppins p-3 py-4 rounded-b-xl">
            <h3>
              Drag and drop or{' '}
              <label className="underline text-primary cursor-pointer">
                Browse files
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </h3>
            <h3 className="font-bold">Add New Document</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsKnowledgeBase;
