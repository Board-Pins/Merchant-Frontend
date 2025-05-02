import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function HeaderCreateBiddingProject() {
  return (
    <div>
      {" "}
      <div className="flex items-center gap-2 mb-2">
     <div className=" flex p-2 rounded-xl bg-[#E5E5FF]"> <AiOutlinePlusCircle  color="#6161FF" size={30}/></div>
        <h3 className="font-extrabold text-2xl">Create Bidding Projects</h3>
      </div>
    </div>
  );
}

export default HeaderCreateBiddingProject;
