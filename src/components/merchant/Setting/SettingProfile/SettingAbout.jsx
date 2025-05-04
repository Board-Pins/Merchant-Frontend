import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';

function SettingAbout() {
  const formik = useFormik({
    initialValues: {
      About: '',
    },
    onSubmit: values => {
      console.log('Form data:', values);
      // Add your form submission logic here
    },
  });

  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState('auto');

  useEffect(() => {
    if (textareaRef.current) {
      setTextareaHeight('auto'); // Reset height to 'auto' to get the correct scrollHeight
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [formik.values.About]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='About' className='block mt-5 text-2xl w-full'>About</label>
        <textarea
          id='About'
          name='About'
          ref={textareaRef}
          className='w-full rounded-xl items-start flex outline-0 border border-gray-500 resize-none min-h-[300px] text-gray-500 text-lg p-5'
          value={formik.values.About}
          placeholder='Lorem ipsum dolor sit amet consectetur. Sit nunc orci nisi mauris sed quisque. Lacus dignissim nisi sed tristique egestas. Ut nec mattis ultricies id sed nulla suscipit adipiscing. Mi placerat tellus eget interdum. Felis lectus sed purus varius vel auctor ut turpis. Dolor sit lectus sit fermentum diam massa eget sed. Mi neque enim libero risus sit aenean'
          onChange={formik.handleChange}
          style={{ height: textareaHeight }}
        />
        <div className='w-full flex justify-center'>
          <button type='submit' className='py-3 px-24 my-5 bg-[#6161FF] text-white rounded-xl'>Update</button>
        </div>
      </form>
    </div>
  );
}

export default SettingAbout;
