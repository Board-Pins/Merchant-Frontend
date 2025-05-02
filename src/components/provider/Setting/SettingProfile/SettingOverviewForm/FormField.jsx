import React from "react";

const FormField = ({ label, name, type, placeholder, formik }) => (
  <div className="block w-full">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="outline-0 px-5 w-full rounded-xl border-[0.95px] border-[#7072758b] py-2"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    />
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-500">{formik.errors[name]}</div>
    )}
  </div>
);

export default FormField;
