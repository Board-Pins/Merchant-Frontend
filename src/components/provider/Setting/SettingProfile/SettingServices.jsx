import React, { useState } from "react";
import icon1 from "../../../../assets/icons/CustomPackagingDesign.png";
import icon2 from "../../../../assets/icons/PackagingPrototyping.png";
import icon3 from "../../../../assets/icons/PackagingProduction.png";
import icon4 from '../../../../assets/icons/SpecializedPackagingServices.png'
import arrow from "../../../../assets/icons/arrowpurp.png";
import AddantherServicesModals from "./SettingProfillesModals/AddantherServicesModals";
import EditServicesModals from "./EditServicesModals";

function SettingServices() {
  const[isOpen,setIsopen]=useState(false)
  const[isOpenEdit,setIsopenEdit]=useState(false)
const OpenModal=()=>{
  setIsopen(true)
}
const CloseModal=()=>{
  setIsopen(false)
}
const OpenModalEdit=()=>{
  setIsopenEdit(true)
}
const CloseModalEdit=()=>{
  setIsopenEdit(false)
}
  const items = [
    {
      title: "Custom Packaging Design",
      Description:
        "Collaborating with clients to create bespoke packaging solutions tailored to their specific products, branding guidelines, and target audience. This may include packaging materials, dimensions, graphics, and structural design elements.",
      Icon: icon1,
    },
    {
      title: "Packaging Prototyping",
      Description:
        "Developing prototypes and mock-ups of packaging designs to test functionality, aesthetics, and durability before mass production. Prototyping helps identify and address any potential issues or improvements early in the design process.",
      Icon: icon2,
    },
    {
      title: "Packaging Production",
      Description:
        " Manufacturing packaging components and assemblies in-house or through third-party suppliers. Utilizing advanced printing, cutting, and assembly technologies to achieve high-quality packaging with efficient production processes.",
      Icon: icon3,
    },
    {
      title: "Packaging Testing and Quality Assurance",
      Description:
        " Conducting rigorous testing and quality control checks to assess packaging durability, stability, tamper resistance, and environmental impact. Testing methods may include drop tests, compression tests, moisture resistance tests, and compatibility testing with product contents.",
      Icon: icon1,
    },
    {
      title: "Specialized Packaging Services",
      Description:
        "Offering specialized packaging solutions for unique products or industries, such as food packaging, pharmaceutical packaging, medical device packaging, electronics packaging, and luxury goods packaging",
      Icon: icon4,
    },
  ];
  return (
    <div>
      {items.map((item,index)=>(
      <div className=" lg:flex" key={index}>
      <div className=" flex flex-grow gap-2 py-6 lg:w-[70%]">
        <img
          src={item.Icon}
          alt="Custom Packaging Design"
          className=" w-[30px] h-[30px]"
        />
        <div className="">
          <h2 className=" text-[#5A5A5A] font-bold">
           {item.title}
          </h2>
          <p className=" text-sm text-[#5A5A5A] mt-1">
          {item.Description}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-end">
        <span className="text-[#A3A3A3] text-[13px]">From $100,200</span>
       <button onClick={()=>OpenModalEdit()}> <img src={arrow} alt="update" className=" w-[35px] h-[35px]" /></button>
      </div>
    </div>

      ))}
     <div className="mt-2 flex w-full justify-center">
          <div className="block">
            <button type="button"  className="text-primary py-2  text-center min-w-[200px] px-1 mb-5 rounded-xl block" onClick={()=>OpenModal()} >
            + Add anther Services
            </button>
            <button type="submit" className="bg-primary py-2 min-w-[200px] px-5 text-white rounded-xl">
             Update
            </button>
          </div>
        </div>
        <AddantherServicesModals isOpen={isOpen} onClose={CloseModal}/>
        <EditServicesModals isOpen={isOpenEdit} onClose={CloseModalEdit}/>
    </div>
  );



}

export default SettingServices;
