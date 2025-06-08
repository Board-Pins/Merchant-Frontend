import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionList = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="p-4  ">
      {sections?.map((section, index) => (
        <div className="space-y-2" key={index}>
          <div
            className="border-b-2 border-gray-200 flex justify-between items-center px-4 py-2 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div>
              <h3 className='text-xl  text-[#404040] opacity-[50] font-[700] py-2'>{section.title}</h3>
            </div>
            <div>{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
          </div>
          {activeIndex === index && (
            <div className="p-4">
              <h3 className='text-[1rem] opacity-75'>{section.content}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
