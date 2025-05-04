import { AiTwotoneClockCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, person, applied, timeAgo, price ,isbuttonApply ,status,id}) => {
  const Navgate=useNavigate()
  return (
    <div className="rounded-xl bg-[#F8F8F8] w-full">
      <header className="flex flex-col lg:flex-row">
        <div className="flex flex-grow gap-2 flex-col p-5 pb-1 lg:order-1 order-2">
          <h1 className="text-xl text-primary font-bold">{title}</h1>
          <div className="flex gap-2 flex-row lg:text-xs text-[10px] items-center font-medium">
            <span className="flex items-center gap-1">
              <BsPersonCircle color="#292D32" />
              {person}
            </span>
            <span className="flex items-center gap-1">
              <MdWorkOutline color="#292D32" />
              {applied} Applied
            </span>
            <span className="flex items-center gap-1">
              <AiTwotoneClockCircle />
              {timeAgo}
            </span>
            <span className="flex items-center gap-1">
              <RiMoneyEuroCircleLine />
              {price}
            </span>
          </div>
        </div>
        {isbuttonApply ? (
          <div className="flex justify-end mt-5 lg:mt-1 items-center gap-2 px-5 lg:order-2 order-1">
            <button className="bg-[#6161FF] rounded-xl text-center text-white px-6 py-2" onClick={()=>Navgate(`/bidding-project/${id}`)}>
            Puplish now
            </button>
            <button className="rounded-xl text-center bg-white text-[#6161FF] px-2 py-2">
            Continue creating
            </button>
          </div>
        ) : (
           ""
        )}
      </header>
      <main className="px-5 py-2 text-sm text-gray-500">
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac tellus consequat dis ac
          elementum odio. Faucibus id vestibulum pretium malesuada quisque mi
          elementum. Semper egestas ut sed phasellus blandit scelerisque
          vestibulum. Nullam tortor ac malesuada sapien porttitor orci.
        </p>
      </main>
    </div>
  );
};
