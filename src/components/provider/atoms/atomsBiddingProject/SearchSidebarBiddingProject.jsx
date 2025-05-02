import React from 'react'
import search from "../../../../assets/images/Navbar/search (1).png";
function SearchSidebarBiddingProject() {
  return (
    <div>   <form className="relative flex items-center mb-3">
    <input
      type="text"
      placeholder="Search"
      className="px-3 w-full rounded-[13px] text-black opacity-50 h-full focus:border-blue-500 focus:shadow-custom outline-0 min-h-[45px]"
    />
    <button
      type="submit"
      className="absolute right-4 flex items-center justify-center h-full"
    >
      <img src={search} alt="search" className="md:w-[20px] w-[20px]" />
    </button>
  </form></div>
  )
}

export default SearchSidebarBiddingProject