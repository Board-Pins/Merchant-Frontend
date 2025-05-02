import React, { useState } from 'react';
import illustration from '../../../assets/images/Landing/Group 26874.png';
import search from '../../../assets/images/Landing/Icon  Bank.svg';
import right from '../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg';
import { RiArrowRightLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";

function Section1Home() {
  const [showCardsCount, setShowCardsCount] = useState(4);
  const [totalCardsCount] = useState(4); // Number of cards to show each time

  // Data for the service features
  const serviceFeatures = [
    {
      title: 'Access to Verified Service Providers',
      description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.',
      src: right
    },
    {
      title: 'Streamlined vendor selection process',
      description: 'Easily compare different service providers and their offerings, allowing you to make informed decisions for your e-commerce business.',
      src: right
    },
    {
      title: 'Exclusive discounts and offer',
      description: 'Take advantage of special discounts and offers available only through our platform, helping you save costs on essential services.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Access to Verified Service Providers',
      description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.',
      src: right
    },
    {
      title: 'Streamlined vendor selection process',
      description: 'Easily compare different service providers and their offerings, allowing you to make informed decisions for your e-commerce business.',
      src: right
    },
    {
      title: 'Exclusive discounts and offer',
      description: 'Take advantage of special discounts and offers available only through our platform, helping you save costs on essential services.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Access to Verified Service Providers',
      description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.',
      src: right
    },
    {
      title: 'Streamlined vendor selection process',
      description: 'Easily compare different service providers and their offerings, allowing you to make informed decisions for your e-commerce business.',
      src: right
    },
    {
      title: 'Exclusive discounts and offer',
      description: 'Take advantage of special discounts and offers available only through our platform, helping you save costs on essential services.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Access to Verified Service Providers',
      description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.',
      src: right
    },
    {
      title: 'Streamlined vendor selection process',
      description: 'Easily compare different service providers and their offerings, allowing you to make informed decisions for your e-commerce business.',
      src: right
    },
    {
      title: 'Exclusive discounts and offer',
      description: 'Take advantage of special discounts and offers available only through our platform, helping you save costs on essential services.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
    {
      title: 'Access to Verified Service Providers',
      description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.',
      src: right
    },
    {
      title: 'Streamlined vendor selection process',
      description: 'Easily compare different service providers and their offerings, allowing you to make informed decisions for your e-commerce business.',
      src: right
    },
    {
      title: 'Exclusive discounts and offer',
      description: 'Take advantage of special discounts and offers available only through our platform, helping you save costs on essential services.',
      src: right
    },
    {
      title: 'Quality assurance',
      description: 'Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind.',
      src: right
    },
  ];

  // Function to show more cards
  const showMoreCards = () => {
    setShowCardsCount(prevCount => prevCount + totalCardsCount);
  };

  // Function to toggle showing all cards
  const toggleShowAllCards = () => {
    setShowCardsCount(showCardsCount === 4 ? 8 : 4); // Toggle between showing 4 and 8 cards
  };

  return (
    <div className="mx-6 lg:mx-24">
      {/* Section 1 */}
      <div className="grid lg:grid-cols-4 grid-cols-1 py-12 gap-2">
        <div className="col-span-1 md:order-1 order-3"></div>
        <div className="mx-5 lg:mx-0 lg:col-span-2 col-span-4 py-5 md:order-2  order-2">
          <h1 className="font-[700] text-center leading-[4rem] text-[48px] text-[#333333] ">

            Grow Your Service Business with Our All-in-One Platform
          </h1>
          <p className="text-md text-center py-3 mt-5">
          Connect with E-Commerce Merchants and Collaborate Effortlessly on Exciting Projects
          </p>

          <div className="bg-white rounded py-3 px-5 m-5 flex">
            <input placeholder="What are you looking for?" className="w-full h-100 outline-0" />
            <img src={search} alt="Search Icon" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:order-3 order-1">
          <img src={illustration} alt="Illustration" className="md:w-auto w-[200px]" />
        </div>
      </div>

      {/* Section 2 - Service Features */}
      <div className="grid lg:grid-cols-4 grid-cols-1 py-4 gap-6 justify-center">
        {serviceFeatures.slice(0, showCardsCount).map((feature, index) => (
          <div key={index} className="flex rounded-3xl bg-white p-3 gap-3">
            <div className=' flex items-start gap-3'>
              <img src={feature.src} alt="Right Icon" className=' w-[200px]' />
            </div>
            <div>
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className='text-center flex justify-center w-full'>
        <div className='w-full'>
          <div className='flex justify-center'>
            <button onClick={showMoreCards} className='text-[#6161FF] block px-7 my-6 text-lg flex gap-2 items-center'>
              Show more
              <FaChevronDown/>
            
            </button>
          </div>
          <div className='flex justify-center mb-12'>
            <button className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md block flex items-center gap-2">Get Started   <RiArrowRightLine/></button>
          </div>
          <h2 className='text-center text-[#676879] mb-12'>
            No credit card needed   ✦   Unlimited time on Free plan
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Section1Home;
