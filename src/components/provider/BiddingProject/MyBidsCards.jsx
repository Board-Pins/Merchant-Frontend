import React from "react";
import { projects } from "../../../utils/helpers/constants";
import { Card } from "./BiddingCards";



function MyBidsCards() {


  return (
    <div className="flex flex-col gap-5 h-[100vh] overflow-y-auto font-poppins px-2"   style={{ scrollbarWidth: 'thin', scrollbarColor: '#6161FF #F2F2F2B2' }}>
      {projects.map((project, index) => (
        <Card key={index} {...project}  />
      ))}
    </div>
  );
}

export default MyBidsCards;
