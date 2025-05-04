import React, { useState } from "react";
import Modal from "../atoms/commonatoms/Modal";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Invite = ({ isOpen, handleIsclose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Member");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    // Handle form submission logic here

    // Reset form after submission
    resetForm();
    handleIsclose(); // Close the modal after submitting
  };

  return (
    <Modal isOpen={isOpen} onClose={handleIsclose} smallModal={"true"}>
      <div className="flex items-center justify-center lg:min-w-[800px]">
        <div>
          <h2 className="text-center font-bold text-[#333333] text-4xl pt-8">
            Invite people
          </h2>
          <p className="text-center lg:text-2xl py-4 text-[#333333] text-light pb-8">
            New members will gain access to public Spaces, <br />
            Docs and Dashboards.
          </p>

          <div className="flex">
            <div className="flex-grow">Invite by email</div>
            <button className="flex items-center gap-1 bg-transparent text-primary text-sm">
              <IoLinkOutline /> Copy Link
            </button>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="flex border border-[#6161FF] rounded-xl p-3 py-2">
                  <Field
                    type="text"
                    name="email"
                    className="flex-grow outline-0"
                    placeholder="Email, comma or space separated"
                  />
        
                  <div className="relative">
                    <button
                      type="button"
                      className="bg-[#D9D9D9] py-2 rounded-xl flex items-center gap-1 px-4 w-full text-left"
                      onClick={toggleDropdown}
                    >
                      {selectedOption} <MdOutlineKeyboardArrowDown />
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute border bg-[#D9D9D9] rounded-xl mt-0 w-full">
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectOption("Member")}
                        >
                          Member
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectOption("Admin")}
                        >
                          Admin
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectOption("Guest")}
                        >
                          Guest
                        </li>
                      </ul>
                    )}
                    
                  </div>
                           
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500" />
                <div className="mt-12 flex gap-2 w-full justify-end">
                  <button
                    type="button"
                    className="px-5 py-3 rounded-xl text-dark bg-[#F5F5F5]"
                    onClick={handleIsclose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-9 py-3 rounded-xl text-white bg-[#6161FF]"
                  >
                    Add
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default Invite;
