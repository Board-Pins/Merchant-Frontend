import React, { useState } from "react";
import MainProjectsDetails from "../../components/provider/BiddingProject/BiddingProjectDetails/MainProjectsDetails";
import HeaderBiddingProjectDetails from "../../components/provider/BiddingProject/BiddingProjectDetails/HeaderBiddingProjectDetails";
import ModalAttacement from "../../components/provider/BiddingProject/BiddingProjectDetails/ModalAttacement";
import SidebarProjectDetails from "../../components/provider/BiddingProject/BiddingProjectDetails/SidebarProjectDetails";


function BiddingProjectDetails() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openAttachmentModal=()=>{
        setModalIsOpen(true)
    }
    const closeAttachmentModal=()=>{
        setModalIsOpen(false)
    }
  return (
    <div className="bg-white rounded-xl p-6 font-poppins">
        <ModalAttacement isOpen={modalIsOpen} onClose={closeAttachmentModal}/>
      <HeaderBiddingProjectDetails />
      <div className="mt-3 grid lg:grid-cols-3 grid-cols-1 gap-3">
        <div className="col-span-2">
        <MainProjectsDetails openAttachmentModal={openAttachmentModal}/>
        </div>
        <div className="col-span-1">
    <SidebarProjectDetails/>
        </div>

      </div>
    </div>
  );
}

export default BiddingProjectDetails;
