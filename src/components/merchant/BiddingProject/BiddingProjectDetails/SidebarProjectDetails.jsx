import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { TbPointFilled } from "react-icons/tb";
import user from "../../../../assets/icons/Ellipse 232.png";
import { IoIosLink } from "react-icons/io";
import { copyToClipboard } from "../../../../utils/helpers/copyTocolbrate";

const projectDetails = [
  { label: "Published from", value: "3 days ago", icon: <CiClock2 /> },
  { label: "Budget range", value: "200 - 1000 Egp", icon: <AiOutlineDollar /> },
  { label: "Deadline", value: "15 Days", icon: <AiOutlineDollar /> },
  { label: "Number of Bids", value: "20", icon: <GoProject /> },
];

function SidebarProjectDetails() {


  return (
    <div className="font-poppins">
      <div className="p-4 bg-[#FBFBFF] rounded-xl border border-[#0000001A] ">
        <h1 className="text-dark my-6 border-b-[1px] font-semibold py-1 border-[#D0D0D0]">
          Project Overview
        </h1>
        <div className="w-full text-sm flex-wrap flex mb-2">
          <div className="mb-2 flex w-full ">
            <div className=" font-semibold  px-2 flex gap-2 w-1/2 items-center ">
              Project Status
            </div>
            <div className={`  flex w-1/2 items-center `}>
              <span className=" flex  items-center bg-[#72E17647] text-[#52CD8F] rounded-2xl px-4 py-1">
                {" "}
                <TbPointFilled color="#52CD8F" />
                Opened
              </span>
            </div>
          </div>
          {projectDetails.map((detail, index) => (
            <div key={index} className="mb-2 text-[#000000AD] flex w-full">
              <div className="flex gap-2 w-1/2 items-center">
                {detail.icon}
                {detail.label}
              </div>
              <div
                className={`text-dark font-semibold flex w-1/2 items-center ${
                  detail.valueClass || ""
                }`}
              >
                {detail.value}
              </div>
            </div>
          ))}
        </div>

        <div className=" p-4 border-t-[1px] border-[#D0D0D0]">
          <h1 className=" text-dark  font-bold">Project owner</h1>
          <div className=" flex items-center gap-2 pt-2">
            <img
              src={user}
              className=" rounded-full w-[50px] h-[50px] border-[2px] m-1 border-[#000000]"
            />
            <div>
              <h3 className=" text-dark font-medium">kirolos adel</h3>
              <h5 className=" text-sm text-gray-400">Software engineer</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#FBFBFF] rounded-xl border border-[#0000001A]  mt-4">
        <h1 className=" text-[#404040] font-bold border-b-[1px] border-[#D0D0D0] pb-4">
          Share Project
        </h1>
        <div className=" rounded-lg py-2 my-3  flex items-center bg-[#F5F5F5] gap-2">
          <p className=" px-2 flex  text-[#989898]">
            https://boardpins.com/project1
          </p>
          <button
            className="flex items-center flex-grow  gap-1 text-xs text-[#404040] px-2"
            onClick={() => copyToClipboard("https://boardpins.com/project1")}
          >
            <IoIosLink />
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarProjectDetails;
