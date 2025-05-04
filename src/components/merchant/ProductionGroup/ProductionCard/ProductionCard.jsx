import { Rating } from "@mui/material";
import { InfoItem } from "./InfoItem";
import { GoDotFill } from "react-icons/go";
import { AvatarGroup } from './AvaterGroup';
import { TiPinOutline } from "react-icons/ti";
import { BookmarkAddOutlined, BookmarkOutlined } from "@mui/icons-material";
import { HiOutlineBookmark } from "react-icons/hi2";

export const ProductionCard = ({ factoryName, requsetbutton,reviews, groupName, target,setisOpen, merchantsApplied, createdAt, category, avatars, image, infoItemsMapping }) => {
    const data = { groupName, target, merchantsApplied, createdAt, category };
  
    return (
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="flex items-center bg-white rounded-lg px-5 py-3 gap-3 ">
         <div className=" flex flex-grow gap-x-20">
         <img src={image} className="w-12 h-12 rounded-full" alt="Factory" />
          <div>
            <h1 className="text-lg font-medium flex-grow">{factoryName}</h1>
            <div className="flex gap-2 items-start">
              <Rating value={reviews} readOnly sx={{ fontSize: "0.8rem" }} />
              <span className="text-gray-300 text-xs">({reviews} Reviews)</span>
            </div>
          </div>

         </div>
          <button className="p-2 bg-gray-200 rounded-full text-lg ">
            <HiOutlineBookmark />
          </button>
        </div>
        <div className="py-4 grid grid-cols-2 gap-2">
          {infoItemsMapping.map(({ icon, titleKey, subtitle }) => (
            <InfoItem key={titleKey} icon={icon} title={data[titleKey]} subtitle={subtitle} />
          ))}
        </div>
  
        <div className="flex justify-between">
          <AvatarGroup avatars={avatars} />
          <div className="flex justify-end items-center py-0">
          
          
            {requsetbutton==="true" ? <button className="  bg-[#6161FF] text-xs text-white rounded-3xl py-2 px-5" onClick={()=>{setisOpen(true)}}>Request To Join</button>:  <button className="rounded-2xl flex items-center bg-[#52CD8F45] text-[#23744B] text-xs py-2 px-3">
              <GoDotFill /> Completed

            
            </button>}
          </div>
        </div>
      </div>
    );
  };
  