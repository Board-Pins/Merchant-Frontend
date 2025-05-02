import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ icon, menuItems, onItemSelect, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="gap-2 flex items-center relative hover:filter-blue-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={icon} alt="Filter" className="w-[15px]" />
        <span>{title}</span>
      </button>
      <div
        className={`absolute top-full right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ transformOrigin: 'top right' }}
      >
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
              onClick={() => {
                onItemSelect(item);
                setMenuOpen(false);
              }}
            >
              <img src={item.icon} alt={item.label} className="inline w-4 mr-2" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  icon: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default MenuButton;
