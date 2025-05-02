import React, { useState } from 'react';
import SidebardBiddingProject from '../../components/provider/BiddingProject/SidebardBiddingProject';
import HeaderBiddingProject from '../../components/provider/BiddingProject/HeaderBiddingProject';
import BiddingProjectsCards from '../../components/provider/BiddingProject/BiddingProjectsCards';
import SavedBiddingProjectCards from './../../components/provider/BiddingProject/SavedBiddingProjectCards';

function SavedBiddingProject() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const statusItems = [
    { value: "Savedporjects", label: "Saved porjects" },
    { value: "Draftprojects", label: "Draft projects" },

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
    <div className='p-6 bg-white rounded-2xl'>
      <HeaderBiddingProject toggleSidebar={toggleSidebar} title={"Saved Projects"} />
     
      <div className='relative grid  py-2 w-full  grid-cols-8 gap-5'>
      <SidebardBiddingProject
  isSidebarOpen={isSidebarOpen}
  toggleSidebar={toggleSidebar}
  statusItems={statusItems}
  skillsItems={skillsItems}
  deadlineItems={deadlineItems}
  headers={{
    filter: "Filter",
    status: "Type",
    skills: "Project owner",
    deadline: "Deadline",
    priceRange: "Price Range",
  }}
/>
        <div className='col-span-8 h-full lg:col-span-6'>
        <SavedBiddingProjectCards/>
        </div>
      </div>
    </div>
  );
}

export default SavedBiddingProject;
