import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../atoms/commonatoms/Modal';

// Validation schema
const validationSchema = Yup.object({
  serviceName: Yup.string()
    .required('Service Name is required'),
});

function AddAnotherServicesModals({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} smallModal={true}>
      <div className="rounded-lg p-6 flex flex-col h-full lg:min-w-[750px]">
        <h2 className="text-3xl text-center font-bold mb-4 text-[#333333]">Add a new Service</h2>
        <Formik
          initialValues={{ serviceName: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission here
            console.log(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-grow">
              <div className="mb-4 flex-grow lg:mx-24">
                <label htmlFor="serviceName" className="block font-medium text-gray-700">
                  Service Name
                </label>
                <Field
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  placeholder="Service Name"
                  className="mt-1 block w-full p-2 py-4 border border-[#6161ffb8] rounded-xl shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
                <ErrorMessage name="serviceName" component="div" className="text-red-600 mt-2" />
              </div>
              <div className="flex justify-end space-x-2 mt-auto">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-7 bg-[#6161FF] text-white rounded-lg hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default AddAnotherServicesModals;
