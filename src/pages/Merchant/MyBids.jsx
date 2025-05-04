import React, { useState } from "react";
import HeaderBiddingProject from "../../components/merchant/BiddingProject/HeaderBiddingProject";
import SidebardBiddingProject from "../../components/merchant/BiddingProject/SidebardBiddingProject";
import BiddingProjectsCards from "../../components/merchant/BiddingProject/BiddingProjectsCards";
import MyBidsCards from "../../components/merchant/BiddingProject/MyBidsCards";
import EditorFully from "../../components/merchant/atoms/atomsEditor/EditorFully";

function MyBids() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const statusItems = [
    { value: "PendingRequest", label: "Pending Request" },
    { value: "Approved", label: "Approved" },
    { value: "Rejected", label: "Rejected" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Finished", label: "Finished" },
    { value: "Closed", label: "Closed" },
  ];

  const skillsItems = [
    { value: "kirolos adel", label: "kirolos adel" },
    { value: "MOhamedIbrahim", label: "MOhamed Ibrahim" },
    { value: "AbdallahOsama", label: "Abdallah Osama" },
    { value: "YousefAI ", label: "Yousef AI" },
  ];

  const deadlineItems = [
    { value: "lessThanWeek", label: "Less than a Week" },
    { value: "moreThanWeek", label: "More than a Week" },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl">
      <HeaderBiddingProject toggleSidebar={toggleSidebar} title={"My Bids"} />

      <div className="relative grid  py-2 w-full  grid-cols-8 gap-5">
        <SidebardBiddingProject
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          statusItems={statusItems}
          skillsItems={skillsItems}
          deadlineItems={deadlineItems}
          headers={{
            filter: "Filter",
            status: "Status",
            skills: "Project owner",
            deadline: "Deadline",
            priceRange: "Price Range",
          }}
        />
        <div className="col-span-8 h-full lg:col-span-6">
          <MyBidsCards />
        </div>
      </div>
    </div>
  );
}

export default MyBids;
