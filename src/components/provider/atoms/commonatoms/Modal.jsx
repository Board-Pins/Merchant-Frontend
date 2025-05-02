import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, children, smallModal, className }) => {
  if (!isOpen) return null;

  // Prevent the modal content click from closing the modal
  const handleContentClick = (event) => {
    event.stopPropagation(); // Stop propagation to prevent closing the modal
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      onClick={onClose} // Click on the overlay closes the modal
    >
      <div
        className={`p-8 rounded-lg ${smallModal ? 'min-h-[40%] overflow-y-hidden' : 'min-h-[95%] overflow-y-auto'} ${className ? className : "bg-white shadow-lg"}`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#6161FF #D9D9D969',
        }}
        onClick={handleContentClick} // Click inside the content stops propagation
      >
        <div className="flex">
          <div className="flex-grow">
            <h1 className="text-2xl text-blue-500 font-bold">{title}</h1>
          </div>
          {onClose ? (
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={(e) => {
                e.stopPropagation(); // Stop propagation when clicking the close button
                onClose();
              }}
            >
              <IoClose size={22} />
            </button>
          ) : null}
        </div>
        <div className="h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
