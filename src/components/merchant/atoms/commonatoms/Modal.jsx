import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  const [isVisible, setIsVisible] = useState(true);

  // Prevent the modal content click from closing the modal
  const handleContentClick = (event) => {
    event.stopPropagation(); // Stop propagation to prevent closing the modal
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 z-50"
      onClick={onClose} // Click on the overlay closes the modal
      style={{
        display: isVisible ? 'flex' : 'none',
        scrollbarWidth: 'thin',
        scrollbarColor: ' #6161FF #D9D9D969',
        scrollBehavior: 'smooth',
        scrollbarGutter: 'stable',
        overflow: 'auto',
        padding: '20px',
      }}
    >
      <div
        className={`p-6 rounded-lg ${className || "bg-white shadow-lg"}`}
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
