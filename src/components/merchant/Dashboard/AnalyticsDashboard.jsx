import React, { useState } from "react";
import pic from "../../../assets/icons/Frame 26944.png";
import ChartDashbard from "./chartDahboard";
import { Rating } from "@mui/material";
import ProgressBar from "../atoms/commonatoms/Progressbar";
import ChartDahboard2 from "./chartDahboard2";
import { AiFillAppstore } from "react-icons/ai";
import { MdGroups, MdPerson } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { TiPin } from "react-icons/ti";

const OverviewCard = ({ title, items }) => (
  <div className="OverviewCard shadow-custom rounded-lg p-4 py-2 mb-2">
    <h3 className="font-bold text-lg py-3">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 py-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-2xl" style={{color:item.color ,backgroundColor:item.bgColor}}>
{item.icon}

          </div>
          <div>
            <h3 className="font-[800] text-[#292D32] text-lg" style={{color:item.color}}>{item.value}</h3>
            <p className="text-xs text-[#292D32] font-[400]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


const ProjectCard = ({ items }) => (
  <div className="OverviewCard shadow-custom rounded-lg p-4  ">
    <h3 className="font-bold text-lg py-3">Projects Overview</h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 py-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 my-3">
          <div
            src={item.image}
            className={`lg:w-[60px] lg:h-[60px]  w-[50px] h-[50px] flex items-center justify-center  rounded-full`}
          style={{color:item.color,backgroundColor:item.bgColor}}
          >

{item.icon}

          </div>
          <div>
            <h3 style={{ color: item.color }} className="font-bold text-2xl">
              {item.value}
            </h3>
            <p className="text-xs text-[#292D32] font-[400]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


const AnalyticsChart = () => {
  const [selectedButton, setSelectedButton] = useState("merchants"); // State to manage selected button

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    console.log(buttonType);
  };

  return (
    <div className="shadow-custom  h-full p-4 rounded-lg">
      <div className="flex items-center gap-4 py-3">
        {/* Merchants Button */}
        <button
          className={` rounded-2xl px-5 py-2  mb-2 sm:mb-0 sm:ml-4 ${
            selectedButton === "merchants"
              ? "bg-[#6161FF] text-white"
              : "#6161F"
          }`}
          onClick={() => handleButtonClick("merchants")}
        >
          Merchants
        </button>
        {/* Projects Button */}
        <button
          className={` rounded-2xl px-5 py-2  mb-2 sm:mb-0 sm:ml-4 ${
            selectedButton === "projects"
              ? "bg-[#6161FF] text-white"
              : "text-blue-500"
          }`}
          onClick={() => handleButtonClick("projects")}
        >
          Projects
        </button>
      </div>
      <div>
        {selectedButton === "projects" ? <ChartDahboard2 /> : <ChartDashbard />}
      </div>
    </div>
  );
};



function AnalyticsDashboard() {
  const ServiceProvidersItems  = [
    { image: pic, value: "200", description: "connected Service Providers " ,color:"#52CD8F" ,bgColor:"#E8F5F4" ,icon:<IoCheckmarkCircleSharp />},
    { image: pic, value: "200", description: "pinned Service Providers  " ,color:"#2D476C" ,bgColor:"#6AA2F31A",icon:<TiPin /> },

  ];

  const projectItems = [
    { image: pic, value: "10", description: "Total", color: "#FFB7BF" ,icon: <MdPerson /> ,bgColor:"#FFA6B01A" },
    { image: pic, value: "20", description: "To-Do Taskss", color: "#B2B3FE" ,icon:<MdGroups /> ,bgColor:"#6AA2F31A" },
    {
      image: pic,
      value: "5",
      description: "In-progress projects",
      color: "#FC7636",
      icon:<AiFillAppstore/>,
      bgColor:"#FF79391A"
    },
    {
      image: pic,
      value: "12",
      description: "Completed projects",
      color: "#52CD8F",
      icon:<BsPersonVcard />,
      bgColor:"#52CD8F30",
    },
  ];

  const projectItemsGroups = [
    { image: pic, value: "10", description: "In-progress projects" },
    { image: pic, value: "200", description: "In-progress projects" },
    { image: pic, value: "200", description: "In-progress projects" },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-6 col-span-12">
          <OverviewCard
            title=" Service Providers Overview"
            items={ServiceProvidersItems}
          />
          <ProjectCard items={projectItems} />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
