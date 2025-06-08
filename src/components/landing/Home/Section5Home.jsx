import React, { useState } from 'react';
import upload from '../../../assets/images/Landing/download 9.svg';
import search from '../../../assets/images/Landing/download 21.svg';
import searchgroup from '../../../assets/images/Landing/search-visual.svg';
import icon11 from '../../../assets/images/Landing/download 21.png';
import icon22 from '../../../assets/images/Landing/download 22.svg';
import icon33 from '../../../assets/images/Landing/download 23.svg';
import icon44 from '../../../assets/images/Landing/discount-percent-coupon--shop-shops-stores-discount-coupon-voucher.svg';
import icon55 from '../../../assets/images/Landing/graph-bar-increase--up-product-performance-increase-arrow-graph-business-chart.svg';
import step1Icon from '../../../assets/images/Landing/Picture → board_icon.svg.svg';
import step1Img from '../../../assets/images/Landing/div.jsx-856369523 (1).png';
import step2Icon from '../../../assets/images/Landing/step2icon.svg';
import step2Img from '../../../assets/images/Landing/div.jsx-856369523 (3).png';
import step3Img from '../../../assets/images/Landing/step3.png';
import step4Img from '../../../assets/images/Landing/step4.png';


import step5Img from '../../../assets/images/Landing/step5.png';
import step6Img from '../../../assets/images/Landing/step6.png';
import step7Img from '../../../assets/images/Landing/step7.png';

function Section5Home() {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleStepClick = (stepNumber) => {
    setSelectedStep(stepNumber);
  };

  const stepperItems = [
    { title: 1, src: upload },
    { title: 2, src: searchgroup },
    { title: 3, src: icon11 },
    { title: 4, src: icon22 },
    { title: 5, src: icon33 },
    { title: 6, src: icon44 },
    { title: 7, src: icon55 },
  ];

  const stepContents = [
    {
      step: 1,
      imgSrc: step1Img,
      iconSrc: step1Icon,
      title: 'Sign Up',
      description: 'Sign Up and Create Your Account. Start by signing up for a Board Pins account. Provide your basic information and create a secure login. Once registered, you\'ll gain access to our platform and its array of verified service providers.',
    },
    {
      step: 2,
      imgSrc: step2Img,
      iconSrc: step2Icon,
      title: 'Browse and Explore Service ',
      description: 'Browse and Explore Service Categories through our searchengine Discover a wide range of service categories tailored specifically for e-commerce merchants. Explore options like legal, accounting, marketing, manufacturing, customer support, and more. Each category is filled with verified service providers ready to meet your business needs.',
    },
    {
      step: 3,
      imgSrc: step3Img,
      iconSrc: search,
      title: 'Conduct Search and Pin Results for Later',
      description: 'Conduct Search and Pin Results for Later Utilize our powerful search engine to find service providers that match your specific requirements. As you browse through the search results, conveniently pin the most relevant ones to your personalized boards for easy access later. This allows you to create a curated collection of potential partners for future reference.',
    },
    {
      step: 4,
      imgSrc: step4Img,
      iconSrc: icon22,
      title: 'Review Profiles',
      description: 'Take a closer look at the profiles of pinned service providers that caught your interest. Read through their descriptions, view their expertise, This helps you make informed decisions while selecting the right providers for your business.',
    },
    {
      step: 5,
      imgSrc: step5Img,
      iconSrc: icon33,
      title: 'Pin and Engage',
      description: 'Once you have identified potential service providers, initiate contact directly through the Board Pins platform. Connect with them to discuss your specific requirements, ask questions, and get a better understanding of how they can support your business goals. Establishing this direct connection enables you to build a strong working relationship.',
    },
    {
      step: 6,
      imgSrc: step6Img,
      iconSrc: icon44,
      title: 'Enjoy Exclusive Discounts',
      description: 'As a Board Pins member, you gain access to exclusive discounts and offers from our verified service providers. These special deals are designed specifically for e-commerce merchants, helping you save costs while accessing high-quality services. Take advantage of these discounts to optimize your budget and maximize your return on investment.',
    },
    {
      step: 7,
      imgSrc: step7Img,
      iconSrc: icon55,
      title: 'Grow and Succeed',
      description: 'With reliable and verified service providers by your side, focus on growing your e-commerce business with confidence. Leverage the expertise and support of our trusted partners to streamline operations, increase sales, and enhance customer satisfaction. Board Pins is here to empower you on your journey to e-commerce success . ',
    },

  ];

  return (
    <div className='lg:mx-64 mx-6 py-12 font-poppins'>
      <h3 id='howUsage' className='text-dark text-center font-bold text-4xl mt-12 mb-3'>How it works</h3>
      <p className='text-center text-dark mb-6'>Easily build your ideal workflow with Boardpins.com building blocks.</p>
      <div className='w-full flex justify-center'>
        <div className='grid lg:grid-cols-7 grid-cols-4 mt-2 lg:gap-6 shadow-custom pt-4 text-[#0F1048] bg-[#FFFFFF01]  rounded-xl'>
          {stepperItems.map((step) => (
            <div
              key={step.title}
              className={`px-6 flex lg:my-0 pt-1 lg:pt-0 py-4 my-4 flex-col  items-center cursor-pointer ${step.title === selectedStep ? 'border-b-[5px] border-[#5034FF] rounded-md text-[#5034FF]' : ''}`}
              onClick={() => handleStepClick(step.title)}
            >
              <img src={step.src} alt={`Step ${step.title} Icon`} className='mb-2' />
              <h3 className='lg:text-[14px]  text-[12px]'>Step {step.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        {stepContents.map((content) => (
          selectedStep === content.step && (
            <div key={content.step} className={` ${content.step === selectedStep ? 'block' : 'hidden'} grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-4`}>
              <div>
                <img src={content.imgSrc} alt={content.title} className='w-full' />
              </div>
              <div className='mx-6'>
                <h2 className='flex items-center  gap-3 text-primary text-lg my-5 font-bold'>
                  <img src={content.iconSrc} alt={`${content.title} Icon`} className='w-[30px]' /> {content.title}
                </h2>
                <p className='text-dark text-[14px] font-poppins-light mb-12 '>{content.description}</p>



              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Section5Home;
