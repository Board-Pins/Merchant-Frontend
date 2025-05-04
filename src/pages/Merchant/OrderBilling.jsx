import React from "react";
import logo from "../../assets/images/Logo.png";
import credit from "../../assets/images/provider/creditcardvisa.png";
import user from "../../assets/icons/Ellipse 232.png";
import { GoNorthStar } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";

const OrderSummaryComponent = () => (
  <div className="font-poppins ">
    <header className="p-8 text-[#5E5E5E] text-xl font-medium border-b-[1px] border-[#A6A6A64D]">
      Order Summary
    </header>
    <div className="p-8">
      <div className="flex gap-2 items-center">
        <img src={user} alt="User" className="rounded-full w-[40px]" />
        <span className="text-xl font-medium text-dark">Mohamed Ahmed</span>
      </div>
      <div>
        <h1 className="text-[#5E5E5E] font-[500] text-lg py-6 px-2">Billing Plan</h1>
        <div className="lg:flex-row flex flex-col gap-8">
          <PlanCard discount="50%" price="EGP 2,999" />
          <PlanCard price="EGP 2,999" />
        </div>
      </div>
    </div>
    <div className="border-t-[1px] border-[#00000040] mt-4">
      <h1 className="text-xl gap-2 p-5 text-[#5E5E5E] flex items-center">
        Payment Details <MdLockOutline />
      </h1>
      <div className="rounded-3xl min-h-[380px] bg-[#D9D9D969] mx-5"></div>
    </div>
  </div>
);

const PlanCard = ({ discount, price }) => (
  <div className="p-5 rounded-3xl border border-primary relative">
    {discount && (
      <div className="bg-primary text-white rounded-full absolute p-2 py-3 top-[-12px] right-[-12px]">
        {discount}
      </div>
    )}
    <h3>Billed Yearly</h3>
    <h4 className="text-light text-xl py-3 text-primary">{price}</h4>
    <p className="text-[#D6D6D6] text-sm">Member per month</p>
  </div>
);

const UserPlanComponent = () => {
  const features = [
    "Unlimited search per day (Editable)",
    "Unlimited connection requests. Find the PERFECT service provider for every need.",
    "Unlimited Categories in Board.",
    "Create Pins Collection",
    "Project Management Powerhouse, Collaborate seamlessly with advanced tools like shared boards, file sharing, and in-app messaging.",
    "Basic reporting and analytics",
    "Exclusive Discounts: Get special offers from select service providers on the platform (limited time only!).",
  ];

  return (
    <div className="py-6">
      <h2 className="text-center text-primary font-bold text-3xl">Standard</h2>
      <ul className="p-8 flex flex-col gap-2">
        {features.map((item, index) => (
          <li key={index} className="grid grid-cols-[auto,1fr] py-1 gap-2 items-start text-sm">
            <GoNorthStar color="#6161FF" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <h2 className="text-xl my-6 text-center text-[#5E5E5E]">
        Tax fees excluded (14%)
      </h2>
      <h3 className="text-lg my-6 text-center text-[#5E5E5E]">
        We accept the following cards
      </h3>
      <div className="flex justify-center items-center w-full">
        <img src={credit} alt="Credit Cards" />
      </div>
    </div>
  );
};

const OrderBilling = () => (
  <div className="bg-[#F5F6FA] flex items-center justify-center ">
    <div>
      <div className="flex w-full justify-center py-12">
        <Link to={"/"}>
          <img src={logo} className="w-[300px]" alt="Logo" />
        </Link>
      </div>
      <div className="shadow-custom lg:w-[1100px] lg:h-[900px] bg-white rounded-3xl mx-4">
        <div className="grid lg:grid-cols-8 grid-cols-1 h-full">
          <div className="col-span-5">
            <OrderSummaryComponent />
          </div>
          <div className="border-l-[1px] border-[#A6A6A64D] h-full col-span-3">
            <UserPlanComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderBilling;
