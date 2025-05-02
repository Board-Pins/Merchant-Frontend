import React from "react";
import visa from "../../../../assets/images/provider/visa.png";
import { TbCreditCardRefund } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

// CardDetail Component
const CardDetail = ({ title, detail }) => (
  <div>
    <h3 className="text-sm text-[#000000] font-mono">{title}</h3>
    <p className="font-bold text-sm">{detail}</p>
  </div>
);

// Button Component
const Button = ({ className, onClick, children }) => (
  <button className={`${className} py-4 px-3 rounded-2xl   justify-center flex gap-1 items-center`} onClick={onClick}>
    {children}
  </button>
);

// CardDetails Component
const CardDetails = () => (
  <div className="flex flex-col gap-2">
    <CardDetail title="Card Type" detail="Debit Card" />
    <CardDetail title="Cardholder Name" detail="Kirolos Adel Azmy" />
    <CardDetail title="Billing Address" detail="Lorem ipsum dolor sit amet consectetur." />
  </div>
);

// CardsPayments Component
const CardsPayments = () => {
  return (
    <div className="shadow-2xl bg-white p-8 rounded">
      <div className="flex py-3">
        <div className="flex-grow">Cards</div>
        <div className="text-[#6161FF] cursor-pointer">View All</div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col gap-3">
          <img src={visa} className="m-3 w-[300px]" alt="Visa Card" />
          <CardDetails />
          <div className="lg:flex-row justify-center flex flex-col gap-2 md:flex-row">
            <Button className="bg-[#6161FF]  text-white">
              Add New Card
              <TbCreditCardRefund />
            </Button>
            <Button className="text-[#B3B3B3]">
              Remove Card
              <IoClose />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPayments;
