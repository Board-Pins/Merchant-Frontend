import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

function Dropdown({ items, title }) {
  const [selectedItem, setSelectedItem] = useState(title);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown when an item is selected
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center min-w-[120px]  justify-between   rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {selectedItem}
          <RiArrowDownSLine />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-[-70px] mt-2 w-48 rounded-md shadow-lg z-50 bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelect(item)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
