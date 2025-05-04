import React, { useState } from 'react';
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import rounded from '../../../assets/icons/rounded.png';

import AccordionBoard from './AccordionBoard';

function Reminder() {
  const [selectedButton, setSelectedButton] = useState('To Do');

  const accordionItems = [
    { title: 'Today', content: 'Test',title_num:"0" },
    { title: 'Overdue ', content: 'Test',title_num:"1" },
    { title: 'Next ', content: 'Test' ,title_num:"2" },
  ];

  return (
    <div>
      <div className='my-5 flex items-center'>
        <img src={rounded} className='bg-[#D9D9D9] w-[40px] p-2 rounded-[10%] m-2' />
        <div className='text-[#26222B] font-[400]'>
          <h5>Reminder</h5>
          <p>lorem ipsum...</p>
        </div>

        <div className='absolute md:gap-2 left-[85%] flex items-center justify-center'>
          <button>
            <img src={rounded} className='w-[15px]' />
          </button>
          <button>
            <img src={icon_edit} className='w-[15px]' />
          </button>
          <button>
            <img src={icon_setting} className='w-[15px]' />
          </button>
        </div>
      </div>

      <header>
        <div className='flex gap-3'>
          <button
            className={`p-1 rounded-2xl px-4 bg-[#FAFAFA] ${selectedButton === 'To Do' ? 'border-[1px] border-[#6161FF] text-[#6161FF]' : 'text-[#8C8585]'}`}
            onClick={() => setSelectedButton('To Do')}
          >
            To Do
          </button>
          <button
            className={`p-1 rounded-2xl px-4 bg-[#FAFAFA] ${selectedButton === 'Done' ? 'border-[1px] border-[#6161FF] text-[#6161FF]' : 'text-[#8C8585]'}`}
            onClick={() => setSelectedButton('Done')}
          >
            Done
          </button>
          <button
            className={`p-1 rounded-2xl px-4 bg-[#FAFAFA] ${selectedButton === 'Delegated' ? 'border-[1px] border-[#6161FF] text-[#6161FF]' : 'text-[#8C8585]'}`}
            onClick={() => setSelectedButton('Delegated')}
          >
            Delegated
          </button>
        </div>
      </header>

      <main className=' mt-6'>
        <AccordionBoard items={accordionItems} />
      </main>
    </div>
  );
}

export default Reminder;
