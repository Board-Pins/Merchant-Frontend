import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="bg-[#F5F6FA] lg:mx-24 p-4 font-poppins">
      <div className="mx-auto flex items-center">
        <div className="flex flex-grow gap-12 items-center">
          <div className="text-[#8E8E8E] text-xl font-bold">
            <Link to={"/"}>
              <img src={logo} className="w-[200px]" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
              activeClassName="text-[#6161FF]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
              activeClassName="text-[#6161FF]"
            >
              About
            </NavLink>
            <NavLink
              to=""
              className={'hover:text-[#6161FF] text-[#8E8E8E]'}
              activeClassName="text-[#6161FF]"
            >
              How it works
            </NavLink>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/pricing"
            className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
            activeClassName="text-[#6161FF]"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
            activeClassName="text-[#6161FF]"
          >
            Login
          </NavLink >
          <NavLink to="signup">

            <button className="text-white hover:text-[#8E8E8E] bg-[#6161FF] rounded-3xl py-3 px-5">
              Get Started
            </button>
          </NavLink>


        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-[#8E8E8E] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink
            to="#home"
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            About
          </NavLink>
          <NavLink
            to="#services"
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            Services
          </NavLink>
          <NavLink
            to="#contact"
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
