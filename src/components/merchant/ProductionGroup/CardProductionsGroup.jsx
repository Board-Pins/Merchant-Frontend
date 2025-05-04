import React, { useState } from "react";
import { ProductionCard } from "./ProductionCard/ProductionCard";

function CardProductionsGroup({setisOpen ,productionData,requsetbutton}) {



  return (
    <div>
      {" "}
      <div className="py-6 grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-full overflow-x-auto">
        {productionData.map((data, index) => (
          <ProductionCard
            key={index}
            {...data}
            requsetbutton={requsetbutton}
            setisOpen={setisOpen}
         
          />
        ))}
      </div>

    </div>
  );
}

export default CardProductionsGroup;
