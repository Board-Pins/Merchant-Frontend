import React from 'react';
import { Field, ErrorMessage } from 'formik';

function CustomInput({ type, label, placeholder, name }) {
  if (type === 'checkbox') {
    return (
      <div className='flex py-6 items-center gap-3'>
        <Field
          id={name}
          name={name}
          type='checkbox'
          className='h-4 w-4 rounded border-gray-300 focus:ring-blue-500 focus:ring-offset-0'
        />
        <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
          By proceeding, you agree to the
          <span className='text-blue-500 px-1 underline'>Terms of Service</span> and
          <span className='text-blue-500 px-1 underline'>Privacy Policy</span>
        </label>
      </div>
    );
  }

  return (
    <div className='block py-1'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className='h-12 rounded-lg px-3 bg-gray-100 focus:border focus:bg-white focus:border-blue-500 outline-none w-full mt-1'
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
    </div>
  );
}

export default CustomInput;
