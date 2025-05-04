import React from "react";
import correct from "../../assets/icons/co.png";
export const PendingModal = () => {
  return (
    <>
      <div className="flex justify-center   items-center h-full">
        <div className=" text-center flex flex-col ">
          <div className="w-full flex items-center justify-center">
            <img src={correct} alt="pending" className=" w-[200px]" />
          </div>

          <h1 className=" font-bold text-2xl">Pending Approval</h1>
          <p className=" lg:px-12 mt-4">
            Your profile details were received successfully and once approved
            you'll be notified by email or one of our team will be in
            touch with you Within 24 hours.
          </p>
        </div>
      </div>
    </>
  );
};
