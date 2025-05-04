import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const SocialMediaInput = ({ label, name, icon, formik, onDelete }) => (
  <div className="block w-full">
    <div className="flex gap-3 items-center">
      <div className="bg-[#F5F5F5] flex items-center justify-center p-2 rounded-lg">
        {icon}
      </div>
      <div className="flex-grow bg-[#F5F5F5] rounded-lg flex">
        <input
          type="url"
          name={name}
          placeholder={label}
          className="rounded-lg flex-grow outline-0 px-5 w-full bg-[#F5F5F5] py-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        />
      
             <button type="button" onClick={onDelete} className="me-2">
        <MdDeleteOutline size={24} className='text-red-500' />
      </button>
      </div>
   
 
    </div>
    {formik.touched[name] && formik.errors[name] && (
          <div className="text-[#FF7676] text-sm">{formik.errors[name]}</div>
        )}
  </div>
);

export default SocialMediaInput;
