import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoMdArrowDropdown } from "react-icons/io";
import user from '../../../../assets/icons/Ellipse 232.png';

// Validation schema for Formik
const validationSchema = Yup.object({
  projectName: Yup.string().required("Project Name is required"),
  projectType: Yup.string().required("Project Type is required"),
  teamMembers: Yup.string().required("Team Members are required"),
});

const teamMembersList = [
  "Team Member Name 1",
  "Team Member Name 2",
  "Team Member Name 3",
  "Team Member Name 4"
];

const ProjectForm = ({ onClose }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState("");

  const handleDropdownToggle = () => setDropdownVisible(!dropdownVisible);

  const handleMemberSelect = (member, setFieldValue) => {
    setSelectedMember(member);
    setFieldValue("teamMembers", member);
    setDropdownVisible(false);
  };

  return (
    <Formik
      initialValues={{
        projectName: "",
        projectType: "",
        teamMembers: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="flex flex-col py-12 lg:min-w-[450px] ">
          <FormField
            name="projectName"
            label="Project Name"
            type="text"
            placeholder="Project Name"
            errors={errors}
            touched={touched}
          />

          <FormField
            name="projectType"
            label="Start Project With *"
            type="radio"
            options={[
              { value: "Merchant", label: "Merchant" },
              { value: "Team", label: "Team" }
            ]}
            errors={errors}
            touched={touched}
          />

          <DropdownField
            name="teamMembers"
            label="Team Members Names *"
            options={teamMembersList}
            selectedOption={selectedMember}
            dropdownVisible={dropdownVisible}
            handleDropdownToggle={handleDropdownToggle}
            handleOptionSelect={(member, setFieldValue) => handleMemberSelect(member, setFieldValue)}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />

          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-[#F5F5F5] text-gray-700 px-6 py-3 rounded-xl mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#6161FF] text-white px-6 py-3 rounded-xl"
            >
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// Reusable form field component
const FormField = ({ name, label, type, placeholder, options, errors, touched }) => (
  <div className="mb-6">
    <label className="block text-gray-700">{label}</label>
    {type === "radio" ? (
      <div className="flex items-center mt-1">
        {options.map(({ value, label }) => (
          <label key={value} className="flex items-center ml-4">
            <Field type={type} name={name} value={value} />
            <span className="ml-2 text-dark">{label}</span>
          </label>
        ))}
      </div>
    ) : (
      <Field
        name={name}
        type={type}
        className="mt-1 block w-full p-2 border border-[#6161FF] rounded-lg py-3 outline-0"
        placeholder={placeholder}
      />
    )}
    {errors[name] && touched[name] && (
      <div className="text-red-500 text-sm">{errors[name]}</div>
    )}
  </div>
);

// Reusable dropdown field component
const DropdownField = ({
  name,
  label,
  options,
  selectedOption,
  dropdownVisible,
  handleDropdownToggle,
  handleOptionSelect,
  errors,
  touched,
  setFieldValue
}) => (
  <div className="mb-6">
    <label className="block text-gray-700">{label}</label>
    <div
      className="flex items-center rounded-xl py-4 px-4 mt-2 bg-[#F5F5F5] text-dark cursor-pointer"
      onClick={handleDropdownToggle}
    >
      <div className="flex-grow">{selectedOption || "Select a Team Member"}</div>
      <IoMdArrowDropdown size={22} />
    </div>

    <div
      className={`select-list rounded-xl bg-[#F5F5F5] text-dark p-3 mt-1 transition-all duration-300 ease-in-out overflow-auto ${
        dropdownVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
      style={{
      
    
        scrollbarWidth: 'thin',
        scrollbarColor: ' #6161FF #D9D9D969'
      }}
    >
      <ul className="flex flex-col gap-2">
        {options.map((option) => (
          <li
            key={option}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
            onClick={() => handleOptionSelect(option, setFieldValue)}
          >
            <img src={user} className="w-[25px]" alt="user icon" />
            {option}
          </li>
        ))}
      </ul>
    </div>

    {errors[name] && touched[name] && (
      <div className="text-red-500 text-sm">{errors[name]}</div>
    )}
  </div>
);

export default ProjectForm;
