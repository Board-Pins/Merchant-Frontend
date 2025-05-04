import { Search } from "@mui/icons-material";
import React from "react";

function HeaderProductionsGroup({ setisOpen }) {
  return (
    <div>
      <header className="flex justify-center items-center rounded-xl bg-[#F8F8F8] py-12">
        <div className="text-center lg:w-[75%]">
          <h1 className="text-dark font-bold text-3xl">
            Welcome to Production groups!
          </h1>
          <p className="py-2 text-lg text-[#292D32] p-3">
            Now you can join production groups with multiple merchants and
            benefit from all its features.
          </p>
          <div className="flex  flex-wrap justify-center items-center space-x-4 ">
            {/* Category Select Input */}
            <div className="relative px-3 bg-white rounded-lg">
              <select
                className=" py-3 px-4   bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="" disabled selected>
                  Category
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
          
            </div>

            {/* Number Input */}
            <input
              type="number"
              className=" py-3 px-4 rounded-lg max-w-[150px]  bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="100"
            />

            {/* Search Button */}
            <button
              className="flex items-center bg-primary text-white py-3 rounded-xl px-5 my-3"
            
            >
              <Search className="mr-2" />
              Find Now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderProductionsGroup;
