import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
const AccordionItem = ({ title, content , title_num}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item ">
      <div
        className="accordion-title cursor-pointer flex  items-center p-4 "
        onClick={toggleAccordion}
      >
      <span>{isOpen ? <BiSolidDownArrow  color='#C6CAD1'/> :<BiSolidRightArrow  color='#C6CAD1'/>}</span>
        <h2 className="text-lg ps-2">{title}</h2>
        <span className="text-sm ps-2 text-[#C6CAD1]">{title_num}</span>
      </div>
      {isOpen && (
        <div className="accordion-content border-b-[1px] p-4 py-2 flex items-center bg-white">
        <LuAlarmClock color='#C6CAD1' size={22} />
        <p className='px-3 underline font-medium text-lg text-[#6A6A65]'>{content}</p>
        <div className='flex-grow' /> {/* This will push "Today" to the right */}
        <p className='text-[#6161FF] font-medium'>Today</p>
      </div>
      
      )}
    </div>
  );
};

const AccordionBoard = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} title_num={item.title_num} />
      ))}
    </div>
  );
};

export default AccordionBoard;
