import React from "react";
import AccordionList from "../../components/provider/atoms/commonatoms/AccordionList";
import { HiOutlineDocumentMinus } from "react-icons/hi2";

function CompareForms() {
  const sections = [
    {
      title: "Pricing Structure",
      content: "Content for section 1",
    },
    {
      title: "Features and Capabilities",
      content: "Content for section 2",
    },
    {
      title: "Ease of Use",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Scalability",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Integration with Other Tools",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Customer Support",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Customization and Flexibility",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Performance and Reliability",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Value-added Services",
      content: "Can I contact service providers directly?",
    },
    {
      title: "Notes",
      content: "Can I contact service providers directly?",
    },
  ];
  return (
    <div>
      {" "}
      <div className=" rounded-xl bg-white p-6">
        <div className=" flex gap-3 items-start  ">
          <HiOutlineDocumentMinus
            color="#6161FF"
            size={45}
            className=" bg-[#E5E5FF] rounded-xl p-2"
          />

          <div>
            <h1 className=" text-2xl font-bold text-dark">
              Shipping Companies Form
            </h1>
            <p className="text-[#B7B7B7]">
              Please fill out this form if you want to get listed in
              Board Compare
            </p>
          </div>
        </div>
        <section className=" py-6 ">
          <AccordionList sections={sections} />
        </section>
      </div>
    </div>
  );
}

export default CompareForms;
