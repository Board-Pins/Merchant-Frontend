import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../../atoms/commonatoms/Modal";
import bidicon from "../../../../assets/icons/bidicon.png";
import { IoIosLink } from "react-icons/io";

const validationSchema = Yup.object({
  priceRange: Yup.number().min(0, 'Must be a positive number').required("Required"),
  deadline: Yup.number().min(0, 'Must be a positive number').required("Required"),
  description: Yup.string().required("Required"),
});

const formFields = [
  {
    name: "priceRange",
    label: "Price range",
    type: "text",
    unit: "$",
    required: true,
  },
  {
    name: "deadline",
    label: "Deadline",
    type: "text",
    unit: "days",
    required: true,
  },
  {
    name: "description",
    label: "Project Descriptions",
    type: "textarea",
    required: true,
  },
];

function BiddingProjectInfoModal({ OpenModalEdit  ,handleCloseModalEdit}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const validFileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (file && validFileTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF or Word document.");
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here (e.g., upload to server)
      console.log("File uploaded:", selectedFile);
      setSelectedFile(null);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <Modal
      isOpen={OpenModalEdit}


      onClose={handleCloseModalEdit}
      meduimModal={true}
      className="bg-[#FBFBFF] lg:w-[65%] mx-5"
      
    >
      <main className="font-poppins">
        <h1 className="text-[#404040] flex items-center text-lg pb-5 border-b-[1px] border-[#D0D0D0] gap-2">
          <img src={bidicon} className="w-[25px]" alt="Bidding Icon" />
          Bidding Project Info
        </h1>

        <Formik
          initialValues={{ priceRange: "", deadline: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            if (selectedFile) {
              console.log({ ...values, file: selectedFile });
              resetForm();
              setSelectedFile(null);
              
            } else {
              alert("Please select a file to upload.");
            }

            handleCloseModalEdit()
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="flex items-center gap-1 text-sm font-medium text-gray-700"
                    >
                      {field.label}
                      {field.required && <span className="text-red-400 text-xl mt-3">*</span>}
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <Field
                        type={field.type}
                        name={field.name}
                        className="flex-1 block w-full outline-0 px-4 py-3 rounded-l-md border-[1px] border-r-[0px] sm:text-sm border-[#707275]"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-[#707275] bg-gray-50 text-gray-500 sm:text-sm">
                        {field.unit}
                      </span>
                    </div>
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="description"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  Project Descriptions <span className="text-red-400 text-xl mt-3">*</span>
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="flex-1 block w-full min-h-[200px] outline-0 px-4 py-3 rounded-xl border-[1px] resize-none sm:text-sm border-[#707275]"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="fileUpload"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-2xl gap-2 text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                >
                  <IoIosLink />
                  Upload Files
                  <input
                    id="fileUpload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                </label>
                {selectedFile && (
                  <div className="mt-2 text-sm text-gray-500">
                    Selected file: {selectedFile.name}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="reset"
                  className="px-1 py-3 min-w-[100px] border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="px-2 min-w-[100px] py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6161FF] hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </Modal>
  );
}

export default BiddingProjectInfoModal;
