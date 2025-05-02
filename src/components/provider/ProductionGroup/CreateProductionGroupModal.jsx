import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../atoms/commonatoms/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoMdApps } from "react-icons/io";
import { FaBullseye, FaUserFriends, FaUsers } from "react-icons/fa";
import { Rating } from "@mui/material";
import { HiOutlineBookmark } from "react-icons/hi2";

import { IoLogoWhatsapp } from "react-icons/io5";

const groupInfo = [
  {
    icon: FaUsers,
    label: "Group Name",
    value: "Group Name",
  },
  {
    icon: FaBullseye,
    label: "500",
    value: "from 1000 Target Number",
  },
  {
    icon: FaUserFriends,
    label: "6",
    value: "Merchants Applied",
  },
  {
    icon: IoMdApps,
    label: "Footwear",
    value: "Category",
  },
  {
    icon: AiOutlineFieldTime,
    label: "2 hours ago",
    value: "Created at",
  },
];

const validationSchema = Yup.object({
  Amount: Yup.number().required(" Amount is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
});

function CreateProductionGroupModal({ isOpen, onClose }) {
  const handleSubmit = (values) => {
    console.log("Form Data", values);
    // Handle form submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-h-[98vh] lg:max-w-[1000px] bg-white"
    >
      <Formik
        initialValues={{
          Amount: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-3 p-6 pt-0 pb-2 font-poppins flex flex-col h-full">
               <div className="lg:flex items-center bg-white rounded-lg px-5 py-3 gap-3 ">
         <div className=" flex flex-grow gap-x-2">
         <img src={"https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"} className="w-12 h-12 rounded-full" alt="Factory" />
          <div>
            <h1 className="text-lg font-medium flex-grow">factoryName</h1>
            <div className="flex gap-2 items-start">
              <Rating value={"4.5"} readOnly sx={{ fontSize: "0.8rem" }} />
              <span className="text-gray-300 text-xs">({15} Reviews)</span>
            </div>
          </div>

         </div>
        <div className="flex items-center lg:my-1 mt-4 gap-3 justify-end">  <button className="p-2 bg-gray-200 rounded-full text-lg ">
            <HiOutlineBookmark />
          </button>
          <button className="p-2 bg-[#52CD8F] text-white rounded-3xl gap-1 px-5 text-sm flex items-center ">
         <IoLogoWhatsapp />
          connect
          </button></div>
        </div>
            <div className="rounded-lg bg-[#F1F1F1] p-4">
         
              <div className="grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-4">
                {groupInfo.map(({ icon: Icon, label, value }, index) => (
                  <div key={index} className="flex items-center">
                    <Icon className="text-2xl text-gray-600 mr-2" />
                    <div>
                      <p className="text-sm font-semibold">{label}</p>
                      <p className="text-gray-500 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-bold text-lg">Group Details</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Odio non ac diam dapibus
                eget at facilisi. Posuere sollicitudin consequat parturient
                proin urna mauris nibh etiam vitae. Non mattis viverra viverra
                metus varius ac posuere.
              </p>
            </div>

            <FormField
              label="Amount"
              name="Amount"
              type="number"
              placeholder="200"
            />

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={"eg"}
                onChange={(phone) => setFieldValue("phoneNumber", phone)}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: false,
                  className:
                    "mt-1 block w-full px-12 py-3 rounded-md text-sm border-[1px] border-[#40404063] outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                }}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div className="flex-grow flex items-end justify-end">
              <button
                type="submit"
                className="mt-4 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#6161FF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Request To Join
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

const FormField = ({ label, name, type, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className="mt-1 block w-full rounded-md text-sm border-[1px] border-[#40404063] p-2 py-3 outline-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-600 text-xs mt-1"
    />
  </div>
);

export default CreateProductionGroupModal;
