import React from 'react';
import EditorFully from '../atoms/atomsEditor/EditorFully';
import PriorityButtons from '../atoms/atomsTaskModal/PriorityButtons';
import MenuBar from '../atoms/atomsEditor/MenuBar';

import { HiOutlineCalendar } from 'react-icons/hi2';

import { GoClock } from 'react-icons/go';
import { TbPhoto } from 'react-icons/tb';
import { PiClock } from 'react-icons/pi';
import { IoMdArrowDropright } from 'react-icons/io';
import { IoLinkOutline } from 'react-icons/io5';

const TaskModalForm = ({
  formik,
  editor,
  priority,
  setPriority,
  handleLinkClick,
  handlePhotoClick,
}) => {

  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="lg:col-span-2 col-span-3">
            <FormField
              id="title"
              name="title"
              label="Title"
              type="text"
              formik={formik}
            />
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-1">
                Description
              </label>
         <div className=' bg-[#f8f8f8] rounded-lg'>     <EditorFully editor={editor} /></div>
              {formik.touched.description && formik.errors.description && (
                <ErrorText>{formik.errors.description}</ErrorText>
              )}
            </div>
            <SubtaskSection />
            <div className="flex items-center gap-3">
              <FormField
                id="dueDate"
                name="dueDate"
                label="Due Date"
                type="date"
                formik={formik}
              />
              <FormField
                id="doDate"
                name="doDate"
                label="Do Date"
                type="date"
                formik={formik}
              />
            </div>
            <PriorityButtons priority={priority} setPriority={setPriority} />
          </div>
          <div className="lg:col-span-1 col-span-3 py-2 px-5">
            <StatusButtons />
            <div>
              <h3 className="text-[#6F6F6F] mt-3">Text Editor</h3>
              <MenuBar editor={editor} />
            </div>
            <AttachmentSection handleLinkClick={handleLinkClick} handlePhotoClick={handlePhotoClick} formik={formik} />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
          >
            Add new Task
          </button>
        </div>
      </form>
    </div>
  );
};

// Extracted FormField Component
const FormField = ({ id, name, label, type, formik }) => (
  <div className="mb-1">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full p-2 bg-[#f8f8f8] rounded-lg"
    />
    {formik.touched[name] && formik.errors[name] && (
      <ErrorText>{formik.errors[name]}</ErrorText>
    )}
  </div>
);

// Extracted ErrorText Component
const ErrorText = ({ children }) => (
  <div className="text-red-500 text-xs mt-1">{children}</div>
);

// Extracted SubtaskSection Component
const SubtaskSection = () => (
  <div className="mb-4 ">
    <label className="block text-gray-700 font-bold mb-2">
      <h2 className="text-sm  mb-2 ">Subtask</h2>
      <div className="px-5 py-0 flex gap-2 items-center shadow-custom">
        <input
          type="radio"
          name="subtask"
          id="specifyColor"
          className="mr-2 leading-tight rounded-full border-[3px] border-blue-500"
        />
        <div className="flex-grow py-2 px-1 font-poppins">
          <h2 className="font-bold text-dark text-xs">Sub Task 1</h2>
          <p className="font-light text-[9px]">
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <div className="flex gap-4 items-center py-1 font-normal">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <PiClock />
              <span>1/2/2024, 07:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <HiOutlineCalendar color="#6161FF" />
              <span>1/2/2024, 12:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3"></div>
      </div>
    </label>
  </div>
);

// Extracted StatusButtons Component
const StatusButtons = () => (
  <div>
    <h2 className="text-[#6F6F6F] pb-3">Pick a Status</h2>
    <div className="flex gap-5 items-center">
      <button className="text-[#FB5607] rounded-3xl bg-[#FB56071A] flex items-center ps-2 pe-5 font-medium text-[15px] min-w-[100px] py-1" type="button">
        <IoMdArrowDropright color="#FB5607" size={25} /> To do
      </button>
      <button className="text-[#292D32] rounded-3xl gap-2 flex items-center ps-2 pe-5 text-sm font-medium py-1 min-w-[130px]" type="button">
        <GoClock color="#292D32" size={18} /> Remind Me
      </button>
    </div>
  </div>
);

// Extracted AttachmentSection Component
const AttachmentSection = ({ handleLinkClick, handlePhotoClick, formik }) => (
  <div>
    <h3 className="text-[#6F6F6F] mt-6">Attachment</h3>
    <div className="flex mt-2 text-[#6F6F6F]">
      <IoLinkOutline size={22} className="mr-4 cursor-pointer" onClick={handleLinkClick} />
      <TbPhoto size={22} className="cursor-pointer" onClick={handlePhotoClick} />
      <input
        type="file"
        id="photo-upload"
        name="photo"
        style={{ display: 'none' }}
        onChange={(event) => formik.setFieldValue('photo', event.target.files[0])}
      />
    </div>
  </div>
);

export default TaskModalForm;
