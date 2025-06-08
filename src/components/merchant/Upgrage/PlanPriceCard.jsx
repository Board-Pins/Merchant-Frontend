import React from 'react';
import star from '../../../assets/icons/Star 15.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PlanCard = ({ title, price, buttonText, currentLanguage, listItems, borderColor, buttonBgColor, buttonTextColor, viewBadge }) => {
  const { t, i18n } = useTranslation()
  return (
    <div className={`bg-white w-full min-h-[580px] max-w-[400px] rounded-3xl flex flex-col border-[1px] h-full shadow-custom`} style={{ borderColor }}>
      <div className={`text-center bg-[#6161FF] rounded-t-3xl text-[#F5F6FA] p-3 text-2xl text-[400] ${viewBadge ? 'block' : 'hidden'}`}>
        <h1>{t('Most_Popular')}</h1>

      </div>

      <div className='p-6 px-8'>
        <header className="flex justify-center">
          <div className="text-3xl text-[#404040]">
            <h3 className="font-bold text-center my-3 ">{title}</h3>
            <h4 className='font-bold text-[24px] text-center'>
              {price} <span className="text-sm font-[200] text-[#A3A3A3]">\ month</span>
            </h4>
            <div className=" flex-grow flex flex-wrap items-center gap-2 justify-center">
              <Link to={"/signup"} className={`flex items-center justify-center text-center border-[#6161FF] bg-[${buttonBgColor}]  border-[1px] px-16 py-1 rounded-3xl text-[${buttonTextColor}] text-[16px] font-[500] my-12 w-full}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                {buttonText}
              </Link>
            </div>
          </div>
        </header>
        <ul>
          {listItems?.map((item, index) => (
            <li key={index} className='text-[14px] font-thin flex items-start gap-3 my-4'>
              <img src={star} className='w-[24px] h-[24px]' alt="star icon" />
              <span className='font-[200]'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;

