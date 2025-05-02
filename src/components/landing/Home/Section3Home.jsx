import right from '../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg';
import services from '../../../assets/images/Landing/Frame 1171276002.png';
import dashboard from '../../../assets/images/Landing/Frame 1171276001.png';
import Project from '../../../assets/images/Landing/image 65.png';
import Project_icon from '../../../assets/images/Landing/Group 26876.png';
import analytics from '../../../assets/images/Landing/Button.png';
import { FaCheck } from "react-icons/fa6";
import { RiArrowRightLine } from "react-icons/ri";

const featuresList1 = [
  'Searching for verified service providers',
  'Task management',
  'Requests & approvals',
  'Custom workflows'
];

const featuresList2 = [
  'Boost sales and conversions with your AI e-commerce consultant',
  'Gain data-driven advice to optimize your ecommerce strategy',
  'Unlock your ecommerce potential with the power of AI'
];

const featuresList3 = [
  'Collaborate effortlessly: Your one-stop shop for managing e-commerce projects.',
  'Seamless teamwork for your business success',
  'Shared tools, simplified work management'
];

const SectionCard = ({ icon, title, subtitle, features, buttonColor, imgSrc, imgAlt }) => (
  <div className='p-12 bg-white shadow-custom rounded'>
    <h1 className='flex font-bold font-poppins text-primary text-xl gap-1 items-center'>
      <img src={icon} alt="icon" className='w-[40px]' />
      <span className='text-[#486868] font-[600]'>{title}</span>
    </h1>
    <h2 className='text-[#333333] font-[600] my-3'>{subtitle}</h2>
    <hr className='bg-grey-500 my-5' />
    <ul>
      {features.map((feature, index) => (
        <li key={index} className='flex items-center gap-2 p-1 text-dark'>
          <FaCheck className='rounded-full bg-[#1F1F20] text-white' />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`flex ${buttonColor} rounded-3xl px-6 py-2 items-center text-white text-sm gap-2 my-5`}>
      Get Started
      <RiArrowRightLine />
    </button>
    <img src={imgSrc} alt={imgAlt} />
  </div>
);

function Section3Home() {
  return (
    <>
      <div className='shadow-custom bg-white rounded lg:mx-24 mx-8 my-12'>
        <div className='grid lg:grid-cols-2 grid-col-1 py-6 px-3'>
          <div className='p-4'>
            <h1 className='flex font-bold font-poppins text-primary text-xl gap-1 items-center'>
              <img src={right} alt="right_icon" />
              <span className='text-primary font-[600]'>Board Pins. Searching for verified Service providers</span>
            </h1>
            <h2 className='text-dark font-[600] my-3'>Access to Verified Service Providers</h2>
            <hr className='bg-grey-500 my-5' />
            <h3 className='text-dark text-lg p-4'>Top features</h3>
            <ul>
              {featuresList1.map((feature, index) => (
                <li key={index} className='flex items-center gap-2 p-1 text-dark'>
                  <FaCheck className='rounded-full bg-[#6161FF] text-white' />
                  {feature}
                </li>
              ))}
            </ul>
            <button className='flex bg-[#6161FF] rounded-3xl px-6 py-3 items-center text-white text-sm gap-2 my-5'>
              Get Started
              <RiArrowRightLine />
            </button>
          </div>
          <div>
            <img src={services} alt="Access to Verified Service Providers" />
          </div>
        </div>
      </div>

      <div className='lg:mx-20 my-12 mx-6'>
        <div className='grid lg:grid-cols-2 grid-col-1 px-3 gap-12'>
          <SectionCard
            icon={analytics}
            title="Board Pins. AI Assistant"
            subtitle="Your AI business consultant, ready to help you grow your e-commerce business."
            features={featuresList2}
            buttonColor="bg-[#52CD8F]"
            imgSrc={dashboard}
            imgAlt="dashboard boardpins"
          />
          <SectionCard
            icon={Project_icon}
            title="Board Pins. Shared Project management tool"
            subtitle="Automate your sales cycles to close more deals"
            features={featuresList3}
            buttonColor="bg-[#52CD8F]"
            imgSrc={Project}
            imgAlt="Project management"
          />
        </div>
      </div>
    </>
  );
}

export default Section3Home;
