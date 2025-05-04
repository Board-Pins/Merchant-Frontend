import React from "react";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import useTiptapEditor from "../atoms/atomsEditor/useTiptapEditor";
import MenuBar from "../atoms/atomsEditor/MenuBar";
import EditorFully from "../atoms/atomsEditor/EditorFully";
import { IoAttach, IoCloudUploadOutline } from "react-icons/io5";
import { Button } from '@mui/material';

const skillsOptions = [
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
];

const categoryOptions = [
  { value: "development", label: "Development" },
  { value: "programming", label: "Programming" },
];

const initialValues = {
  projectTitle: "",
  projectDescription: "",
  skills: [],
  minPrice: "",
  maxPrice: "",
  deadline: "",
  projectCategory: [],
  projectCover: null,
  assets: null,
};

const validationSchema = Yup.object({
  projectTitle: Yup.string().required("Project title is required"),
  projectDescription: Yup.string(),
  skills: Yup.array().min(1, "Select at least one skill"),
  minPrice: Yup.number().required("* required"),
  maxPrice: Yup.number().required("* required"),
  deadline: Yup.number().required("* required"),
  projectCategory: Yup.array().min(1, "Select at least one category"),
  assets: Yup.mixed(),
});

function FormCreateBiddingProject() {
  const editor = useTiptapEditor();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      values.projectDescription = editor.getText(); // Add the editor content to the form values
      console.log("Form Submitted", values);
      // Handle form submission
    },
  });

  const renderInputField = (
    label,
    name,
    type = "text",
    placeholder = "",
    extraProps = {}
  ) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-dark" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full mt-2 p-3 border border-[#70727595] rounded-lg focus:outline-none focus:border-blue-500"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        {...extraProps}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm">{formik.errors[name]}</div>
      )}
    </div>
  );

  const renderSelectField = (label, name, options) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-dark" htmlFor={name}>
        {label}
      </label>
      <Select
        options={options}
        isMulti
        className="mt-2"
        classNamePrefix="select"
        placeholder={`Select ${label.toLowerCase()}...`}
        name={name}
        onChange={(selected) => formik.setFieldValue(name, selected)}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm">{formik.errors[name]}</div>
      )}
    </div>
  );

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-8 gap-5">
      <div className="lg:col-span-5 md:col-span-5 col-span-8">
        <div className="p-6 bg-white text-dark rounded-lg">
          {renderInputField(
            "Project title",
            "projectTitle",
            "text",
            "Packaging Service Provider Name"
          )}

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-dark"
              htmlFor="projectDescription"
            >
              Project description
            </label>
            <div className="border border-[#70727595] rounded-lg">
              <div className="bg-[#F2F4F7]">
                <MenuBar editor={editor} />
              </div>
              <EditorFully
                editor={editor}
                value={formik.values.projectDescription}
                onChange={(value) =>
                  formik.setFieldValue("projectDescription", value)
                }
              />
            </div>
            {formik.touched.projectDescription &&
              formik.errors.projectDescription && (
                <div className="text-red-500 text-sm">
                  {formik.errors.projectDescription}
                </div>
              )}
          </div>

          {renderSelectField("Skills", "skills", skillsOptions)}

          <div className="mb-6 flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2">
              <label
                className="block text-sm font-medium text-dark"
                htmlFor="minPrice"
              >
                Price Range
              </label>
              <div className="flex mt-2 gap-2 w-full">
                {renderInputField("", "minPrice", "number", "Min", {
                  className:
                    "w-full p-3 border border-[#70727595] rounded-lg focus:outline-none focus:border-blue-500",
                })}
                {renderInputField("", "maxPrice", "number", "Max", {
                  className:
                    "w-full p-3 border border-[#70727595] rounded-lg focus:outline-none focus:border-blue-500",
                })}
              </div>
              {(formik.touched.minPrice && formik.errors.minPrice) ||
              (formik.touched.maxPrice && formik.errors.maxPrice) ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.minPrice || formik.errors.maxPrice}
                </div>
              ) : null}
            </div>
            <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
              <label
                className="block text-sm font-medium text-dark"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <div className="flex mt-2">
                <input
                  type="number"
                  id="deadline"
                  name="deadline"
                  className="w-full text-dark p-3 border border-[#70727595] rounded-l-lg focus:outline-none focus:border-blue-500"
                  placeholder="30"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.deadline}
                />
                <span className="inline-flex items-center px-3 bg-white border border-gray-600 border-l-0 rounded-r text-sm">
                  days
                </span>
              </div>
              {formik.touched.deadline && formik.errors.deadline && (
                <div className="text-red-500 text-sm">
                  {formik.errors.deadline}
                </div>
              )}
            </div>
          </div>

          {renderSelectField(
            "Project Category",
            "projectCategory",
            categoryOptions
          )}
        </div>
      </div>

      <div className="lg:col-span-3 col-span-8 flex flex-col gap-5 justify-center items-center">
      <div
  className="box-projectcover min-h-[220px] border w-full lg:w-[60%] bg-[#FBFBFF] mx-auto border-primary border-dashed rounded-xl flex justify-center items-center"
  onClick={() => document.getElementById("projectCover").click()}
>
  <div className="text-center text-primary flex flex-col justify-center items-center">
    <IoCloudUploadOutline size={30} />
    <input
      id="projectCover"
      name="projectCover"
      type="file"
      accept="image/png, image/jpeg"
      onChange={(event) =>
        formik.setFieldValue("projectCover", event.currentTarget.files[0])
      }
      className="hidden" // Hide the actual input
    />
    <label htmlFor="projectCover">
      <button
        className="text-white bg-primary py-2 px-3 rounded-2xl text-xs my-3"
        type="button"
      >
        Upload Project cover
      </button>
    </label>
    {formik.touched.projectCover && formik.errors.projectCover && (
      <div className="text-red-500 text-sm">
        {formik.errors.projectCover}
      </div>
    )}
  </div>
</div>


<div
  className="box-attachement min-h-[170px] border w-full lg:w-[60%] mx-auto border-gray-400 border-solid rounded-xl"
  onClick={() => document.getElementById("assets").click()}
>
  <div className="p-3">
    <h5 className="font-semibold text-xs mb-3 text-dark">
    Attach Assets
    </h5>
    <div className="w-full">
      <input
        id="assets"
        name="assets"
        type="file"
        onChange={(event) =>
          formik.setFieldValue("assets", event.currentTarget.files[0])
        }
        className="hidden" // Hide the actual input
      />
      <label htmlFor="assets">
        <div className="p-2 flex flex-col justify-center items-center cursor-pointer  border-gray-400 rounded-lg">
         
          <span className=" flex border border-gray-700 rounded-2xl px-4 py-1 items-center">  <IoAttach size={30} className="text-xs text-primary rotate-45"  />Attach Assets</span>
          <p className="text-xs text-gray text-center mt-2">
          Add files like word, excel,
          photos, zips, or templates ...etc
          </p>
        </div>
      </label>
    </div>
    {formik.touched.assets && formik.errors.assets && (
      <div className="text-red-500 text-sm">{formik.errors.assets}</div>
    )}
  </div>
</div>


        <div className="min-h-[170px] w-full lg:w-[60%] flex flex-col gap-3">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-lg w-full"
          >
            Create Project
          </button>
          <button
            type="button"
            className="border border-[#404040] text-dark py-2 px-4 rounded-lg w-full"
          >
            Sava as draft
          </button>
          <button
            type="button"
            className=" text-gray-400 underline py-2 px-4 rounded-lg w-full"
          >
            preview
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormCreateBiddingProject;
