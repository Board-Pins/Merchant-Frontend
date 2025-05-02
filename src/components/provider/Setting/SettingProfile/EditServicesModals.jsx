import React from 'react';
import Modal from '../../atoms/commonatoms/Modal';
import { Formik, Form, Field } from 'formik';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiLineVerticalLight } from 'react-icons/pi';

const EditServicesModals = ({ isOpen, onClose }) => {
  const initialValues = {
    servicePrice1: '',
    servicePrice2: '',
    serviceDescription: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} smallModal={true}>
      <h2 className="text-xl font-semibold border-b-[1px] border-[#000000] mb-5 py-4 flex items-center gap-2">
        <HiOutlineArrowNarrowLeft onClick={onClose} className="cursor-pointer" />
        Edit Service Details
      </h2>
      <h3 className="text-2xl py-1 text-[#1E1E1E]">Service</h3>
      <p className="text-md py-1 pb-5 text-[#5A5A5A]">Custom Packaging Design</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className="flex flex-col font-poppins">
            <div className="flex-grow">
              <div className="mb-4 lg:min-w-[750px]">
                <label className="block text-gray-700 font-bold mb-2">Service Price</label>
                <div className="flex lg:flex-row flex-col items-center ">
                  <div className="flex rounded-xl border border-[#6161FF]">
                    <Field
                      name="servicePrice1"
                      type="text"
                      className="bg-[#F5F5F5] mx-1 my-1 outline-0 rounded px-4 py-2 lg:w-[150px] flex-grow"
                      placeholder="Price"
                    />
                    <span className="border-l-[1px] border-[#6161FF] text-[#6161FF] text-xs items-center flex font-bold px-3 py-2">
                      EGP
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-red relative">
                  <PiLineVerticalLight size={40} color='#1E1E1E' />
                    <span className="text-center absolute z-10 text-xs bg-white rounded-full">To</span>
                  
                  </div>
                  <div className="flex rounded-xl border border-[#6161FF]">
                    <Field
                      name="servicePrice2"
                      type="text"
                      className="bg-[#F5F5F5] mx-1 my-1 outline-0 rounded px-4 py-2 lg:w-[150px] flex-grow"
                      placeholder="Price"
                    />
                    <span className="border-l-[1px] border-[#6161FF] text-[#6161FF] text-xs items-center flex font-bold px-3 py-2">
                      EGP
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Service Description</label>
                <Field
                  name="serviceDescription"
                  as="textarea"
                  className="border border-gray-300 rounded-xl px-4 py-2 w-full outline-none resize-none min-h-[150px]"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="flex">
              <div className="text-white bg-[#FF3636] p-3 rounded-xl">
                <RiDeleteBin6Line />
              </div>
              <div className="flex-grow flex justify-end gap-4 items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-[#6161FF] text-white px-7 py-2 rounded-lg">
                  Add
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditServicesModals;
