// NewPassword.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup"

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../../services/userApi';
import { toast, ToastContainer } from 'react-toastify';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const NewPassword = () => {
const nav= useNavigate()
  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get('user_email');
  const otp = searchParams.get('otp');
  const [resetPassword, { isLoading, data }] = useResetPasswordMutation();
  const initialValues = {
    password: '',
    confirmPassword: '',
    otp: otp,
    email:userEmail
  };

  const onSubmit = async (values) => {
    try {
      await resetPassword({ otp, ...values }).unwrap();
      toast.success('Password has been reset successfully!');
      nav("/login")
    } catch (error) {
      // Extract the error message from the response
      const errorMessage = error.data?.data?.errors?.en || 'Failed to reset password. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className='pb-3 mt-24 flex flex-col gap-5'>
      <ToastContainer />
      <header>
        <CustomTitle title={'Create a new password!'} />
      </header>
      <main className='flex justify-center items-center pb-6'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12 flex flex-col gap-4'>
        
              <CustomInput
                type='password'
                label='Choose new password'
                placeholder='Enter password'
                name='password'
              />
              <CustomInput
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                name='confirmPassword'
              />
              <CustomSubmitBtn nameBtn={isLoading ? "Loading..." : 'Create Password'} />
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default NewPassword;