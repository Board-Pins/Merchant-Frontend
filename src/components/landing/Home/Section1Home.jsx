import React, { useState } from 'react';
import illustration from '../../../assets/images/Landing/Group 26874.png';
import search from '../../../assets/images/Landing/Icon  Bank.svg';
import right from '../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg';
import { RiArrowRightLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";

import { FaChevronUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Section1Home() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Function to change the language
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };
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
    <div className={`mx-6 lg:mx-24 ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      {/* Section 1 */}
      <div className={`flex lg:flex-row flex-col bg w-full py-12 gap-2`}>
        <div className={` ${currentLanguage === "ar" ? "lg:me-56" : "lg:ms-56"} flex-grow bg py-5 md:order-2 order-2`}>
          <h1 className="lg:font-[800] font-[700] text-center lg:leading-[3.5rem] md:text-[38px] text-[32px] text-[#333333]">
            {currentLanguage === "ar" ? "نمو عملك في الخدمة مع منصتنا الشاملة" : "Grow Your Service Business with Our All-in-One Platform"}
          </h1>
          <p className="text-md text-center py-3 mt-5">
            {currentLanguage === "ar" ? "تواصل مع التجار الإلكترونيين وتعاون بسهولة في مشاريع مثيرة" : "Connect with E-Commerce Merchants and Collaborate Effortlessly on Exciting Projects"}
          </p>
          <div className="bg-white rounded py-3 px-5 m-5 flex">
            <input placeholder={currentLanguage === "ar" ? "ماذا تبحث عنه؟" : "What are you looking for?"} className="w-full h-100 focus:outline-none" />
            <img src={search} alt="Search Icon" />
          </div>
        </div>

        <div className={`lg:flex hidden justify-center lg:max-w-[300px] items-center w-full order-1 ${currentLanguage === "ar" ? "md:order-1" : "md:order-3"}`}>
          <img src={illustration} alt="Illustration" className={currentLanguage === "ar" ? `md:w-auto w-[200px]` : `md:w-auto w-[200px]`} />
        </div>
      </div>

      {/* Section 2 - Service Features */}
      <div className={`grid lg:grid-cols-4 grid-cols-1  py-4 gap-6  justify-center transition-max-height duration-500 ease-in-out`} style={{ maxHeight: showCardsCount === 4 ? '500px' : '1000px', overflow: 'hidden' }}>
        {serviceFeatures.slice(0, showCardsCount).map((feature, index) => (
          <div key={index} className="flex rounded-xl bg-white p-6 gap-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#6161FF]/20 group">
            <img src={feature.src} alt="Feature Icon" className='w-12 h-12 rounded-2xl' />
            <div>
              <h3 className="font-bold mb-2 text-[#333333]">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Show more/Show less button */}
      <div className='text-center flex justify-center w-full'>
        <div className='w-full'>
          <div className='flex justify-center'>
            <button onClick={toggleShowAllCards} className='text-[#6161FF]  px-7 my-6 text-lg flex gap-2 items-center'>
              {showCardsCount === 4 ? (currentLanguage === "ar" ? "عرض المزيد" : "Show more") : (currentLanguage === "ar" ? "عرض أقل" : "Show less")}
              {showCardsCount === 4 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          <div className='flex justify-center mb-12'>
            <Link
              to="/signup"
              className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md  flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {currentLanguage === "ar" ? "ابدأ الآن" : "Get Started"} <RiArrowRightLine />
            </Link>
          </div>
          <h2 className='text-center text-[#676879] mb-12'>
            {currentLanguage === "ar" ? "لا تحتاج إلى بطاقة ائتمان ✦ وقت غير محدود في الخطة المجانية" : "No credit card needed ✦ Unlimited time on Free plan"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Section1Home;