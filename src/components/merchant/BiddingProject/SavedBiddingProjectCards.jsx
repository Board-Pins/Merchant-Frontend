import React from "react";
import { Card } from "./BiddingCards";
import { Savedprojects } from "../../../utils/helpers/constants";



function SavedBiddingProjectCards() {


  return (
    <div className="flex flex-col gap-5 h-[100vh] overflow-y-auto font-poppins px-2"   style={{ scrollbarWidth: 'thin', scrollbarColor: '#6161FF #F2F2F2B2' }}>
      {Savedprojects.map((project, index) => (
        <Card key={index} {...project} isbuttonApply={"true"} />
      ))}
    </div>
  );
}

export default SavedBiddingProjectCards;
