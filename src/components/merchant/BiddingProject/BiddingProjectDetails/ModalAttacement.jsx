import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import ModalKnowloageBase from "./ModalKnowloageBase";

const ModalAttachment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
const [knowloadgebase, setknowloadgebase] = useState(false)
  return (
    <div
      className="fixed font-poppins top-0 gap-5 left-0 w-full h-full flex lg:flex-row flex-col items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      onClick={onClose}
    >
{!knowloadgebase?<>      <div
        className="rounded-xl flex items-center justify-center w-[300px] h-[250px] bg-white"
        onClick={stopPropagation}
      >
        <div className="text-center">
          <div className="flex items-center justify-center w-full">
            <IoCloudUploadOutline size="40" />
          </div>
          <h2 className="text-sm font-bold ">Upload From PC</h2>
          <h2 className="mt-4 text-[#565656]">
            Drag and drop or{" "}
            <label htmlFor="file-upload" className="text-primary underline cursor-pointer">
              Browse files
            </label>
          </h2>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("File uploaded:", file);
              }
            }}
          />
        </div>
      </div>
      <div
        className="rounded-xl flex items-center justify-center   w-[300px] h-[250px] bg-white"
        onClick={stopPropagation}
      >
        <div className="text-center">
          <div className="flex items-center justify-center w-full">
            <LuBrain size="40" />
          </div>
          <h2 className=" text-sm font-bold">From Knowledgebase</h2>
          <h2 className=" mt-4  text-[#565656]">Manage Your <span className="  underline" onClick={()=>setknowloadgebase(true)}> Knowledge base</span></h2>
        </div>
      </div></>:<ModalKnowloageBase  stopPropagation={stopPropagation} setknowloadgebase={setknowloadgebase}/>}
    </div>
  );
};

export default ModalAttachment;
