import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import AtomsTextCardChatWelcome from '../atoms/atomsChat/atomsChatMain/atomsTextCardChatWelcome';

const items = [
  'Ultrices morbi parturient duis tellus feugiat non amet pretium.',
  '“ Vitae malesuada lectus id feugiat amet elit eget. Blandit ut felis magna. “',
  '“ Aliquam tempor hendrerit cursus integer ac viverra commodo sit. Aliquet nunc scelerisque in elit eget. ”',
  '“ Adipiscing quis venenatis consectetur pellentesque tempus. Sit sapien a mattis et faucibus ante. Tortor cursus urna leo ac. ”',
];

const itemsPrompt = [
  'Give me some ideas about',
  'Give me some ideas about',
  'Tell a joke',
  'Write an email about',
];


const PromptButton = ({ text }) => (
  <div className='px-2 py-1 text-center bg-[#6161ff1f] border-[0px] rounded-2xl text-[10px] font-medium text-primary'>
    <p>{text}</p>
  </div>
);

function ChatWelcome() {
  return (
    <div className='flex items-center justify-center'>
      <div className='block text-center font-poppins h-full lg:pt-8 pt-8'>
        <h1 className='font-poppins font-bold text-3xl'>Board Pins.</h1>
        <h2 className='text-primary font-bold text-3xl py-2'>
          Welcome to Board Pins AI assistant
        </h2>
        <p className='text-2xl font-light font-poppins'>
          Your personalised AI-powered chatbot
        </p>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 pt-12 mx-6'>
          {items.map((item, key) => (
            <AtomsTextCardChatWelcome text={item} key={key} />
          ))}
        </div>

        <section>
          <div className='py-3 px-5 flex gap-2 items-center text-[#979797]'>
            <h1 className='text-start'>Hide prompts</h1>
            <MdOutlineKeyboardArrowDown size={18} />
            <RxUpdate size={12} />
          </div>
        </section>

        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-3 mx-6'>
          {itemsPrompt.map((item, key) => (
            <PromptButton text={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatWelcome;
