import React from 'react';
import modelImage from '../../../assets/images/chat/model.png';
import userImage from '../../../assets/images/chat/user.png';
import { SlDislike, SlLike } from 'react-icons/sl';
import { TfiReload } from 'react-icons/tfi';
import { MdContentCopy } from 'react-icons/md';

const IconButton = ({ icon: Icon }) => (
  <button className="text-gray-500 hover:text-blue-500 transition">
    <Icon />
  </button>
);

const Message = ({ isUser, text, imgSrc }) => (
  <div className={`message ${isUser ? 'messageuser' : 'messagemodal'} flex items-start gap-2`}>
    {isUser && <img src={imgSrc} className="rounded-lg w-[35px]" alt="User" />}
    <p className="shadow-custom bg-white text-[#26222B] border-[1px] p-4 rounded-xl border-gray-100">
      {text}
      {!isUser && (
        <div className="pt-5 flex justify-end items-center duration-200 gap-2">
          <IconButton icon={SlLike} />
          <IconButton icon={SlDislike} />
          <IconButton icon={TfiReload} />
          <IconButton icon={MdContentCopy} />
        </div>
      )}
    </p>
    {!isUser && <img src={imgSrc} className="rounded-lg w-[35px]" alt="Model" />}
  </div>
);

const messages = [
  {
    isUser: true,
    text: "Ask any Question ?",
    imgSrc: userImage,
  },
  {
    isUser: false,
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum nisi molestie diam nisi sed sem est. Lobortis tristique convallis pellentesque nec. Est viverra massa dolor proin leo. Arcu et nulla at quis. Est ipsum viverra lobortis pharetra scelerisque nunc mattis pharetra. Fermentum suspendisse pulvinar commodo massa cum. Sit tortor urna condimentum sem lacus nunc convallis.",
    imgSrc: modelImage,
  },
  {
    isUser: true,
    text: "Ask any Question ?",
    imgSrc: userImage,
  },
  {
    isUser: false,
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum nisi molestie diam nisi sed sem est. Lobortis tristique convallis pellentesque nec. Est viverra massa dolor proin leo. Arcu et nulla at quis. Est ipsum viverra lobortis pharetra scelerisque nunc mattis pharetra. Fermentum suspendisse pulvinar commodo massa cum. Sit tortor urna condimentum sem lacus nunc convallis.",
    imgSrc: modelImage,
  },
  // Repeat as necessary
];

const ChatMessages = () => (
  <div className="flex flex-col gap-8 p-4 h-full overflow-y-auto md:max-h-[60vh] max-h-[50vh]"  style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
    {messages.map((message, index) => (
      <Message key={index} {...message} />
    ))}
  </div>
);

export default ChatMessages;
