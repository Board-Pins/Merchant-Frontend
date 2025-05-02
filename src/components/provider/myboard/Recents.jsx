import React from 'react';
import pin from '../../../assets/icons/pin-1 1.png';
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import add from '../../../assets/icons/Group 1000001543.png';
import chat from '../../../assets/icons/Frame 1171275911.png';
import search from '../../../assets/icons/Frame 26872.png';
import Remove from '../../../assets/icons/block_group.png';
import accept from '../../../assets/icons/block1.png';
import img_merchant from "../../../assets/icons/Rectangle 541 (1).png";
import rounded from "../../../assets/icons/rounded.png";

const buttons = [
  { src: icon_edit, alt: 'Edit', className: 'w-[25px] ' },
  { src: icon_setting, alt: 'Settings', className: 'w-[25px] ' },


];

const items = [
  { src: add, text: 'Add new Section “Bussiness Section”' },
  { src: chat, text: 'Chat' },
  { src: search, text: 'Search About .....' },
  { src: Remove, text: 'Remove Marchant Name From Pinnedat' },

  { src: Remove, text: 'Remove Marchant Name From Pinnedat' },
  { src: accept, text: 'Accept Merchant Request' },
  { src: Remove, text: 'Remove Marchant Name From Pinnedat' },
  { src: accept, text: 'Accept Merchant Request' },
  { src: accept, text: 'Accept Merchant Request' },
];

function Recents() {
  return (
    <div>
      <div className='my-5 flex items-center'>
        <img src={pin} className='bg-[#D9D9D9] p-2 rounded-[10%] m-2' alt='Pin' />
        <div>
          <h5>Recents</h5>
          <p>lorem ipsum...</p>
        </div>
        <div className='absolute md:left-[85%] gap-2 left-[80%] flex items-center justify-center'>
          {buttons.map((button, index) => (
            <button key={index}>
              <img src={button.src} alt={button.alt} className={button.className} />
            </button>
          ))}
        </div>
      </div>
      <div className='mx-2 my-6  w-full '>
        {items.map((item, index) => (
          <div className='mx-2 my-6 flex  w-full gap-5 items-center' key={index}>
            <img src={item.src} className='w-[20px] ' alt={item.text} />
            <span className=' flex-grow'>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recents;
