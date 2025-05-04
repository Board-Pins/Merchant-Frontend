import React, { useState } from 'react';
import HeaderBiddingProject from '../../components/merchant/BiddingProject/HeaderBiddingProject';

import SidebardBiddingProject from '../../components/merchant/BiddingProject/SidebardBiddingProject';
import BiddingProjectsCards from '../../components/merchant/BiddingProject/BiddingProjectsCards';

function BiddingProject() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const statusItems = [
    { value: "creativeWork", label: "Creative Work" },
    { value: "marketingAgency", label: "Marketing Agency" },
    { value: "webDevelopment", label: "Web Development" },
  ];

  const skillsItems = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "react", label: "React" },
    { value: "django", label: "Django" },
  ];

  const deadlineItems = [
    { value: "lessThanWeek", label: "Less than a Week" },
    { value: "moreThanWeek", label: "More than a Week" },
  ];



  return (
    <div className='p-6 bg-white rounded-2xl'>
      <HeaderBiddingProject toggleSidebar={toggleSidebar} title={"Discover Bidding Projects"} />

      <div className='relative grid  py-2 w-full  grid-cols-8 gap-5'>
        <SidebardBiddingProject
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          statusItems={statusItems}
          skillsItems={skillsItems}
          deadlineItems={deadlineItems}
          headers={{
            filter: "Filter",
            status: "Status",
            skills: "Skills",
            deadline: "Deadline",
            priceRange: "Price Range",
          }}
        />
        <div className='col-span-8 h-full lg:col-span-6'>
          <BiddingProjectsCards />
        </div>
      </div>
    </div>
  );
}

export default BiddingProject;
