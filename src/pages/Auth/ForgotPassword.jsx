// ForgetPassword.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";

import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';
import { toast, ToastContainer } from 'react-toastify';
import { useForgotPasswordMutation } from '../../services/userApi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ForgetPassword = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [forgotPassword, { data, isLoading, error }] = useForgotPasswordMutation();
  const nav = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email(t('forgetPassword.invalidEmail')).required(t('forgetPassword.emailRequired')),
  });

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values) => {
    try {
      await forgotPassword(values.email).unwrap();
      toast.success(t('forgetPassword.resetLinkSent'));
      nav('/recoverysuccess');
    } catch (error) {
      const errorMessage = error?.data?.errors?.en || t('forgetPassword.failedToSendLink');
      toast.error(errorMessage);
    }
  };

  return (
    <div className='pb-3 mt-24'>
      <ToastContainer />
      <header>
        <CustomTitle title={t('forgetPassword.headerTitle')} />
      </header>
      <main className='flex flex-row gap-12 mt-12 justify-center items-center'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12 flex flex-col gap-3'>
              <CustomInput
                type='email'
                label={t('forgetPassword.emailRequired')}
                placeholder={t('forgetPassword.emailRequired')}
                name='email'
              />
              <CustomSubmitBtn nameBtn={isLoading ? t('forgetPassword.loading') : t('forgetPassword.sendLink')} />
            </Form>
          )}
        </Formik>
      </main>
      <CustomTextNav title={t('forgetPassword.needAccount')} linkName={t('forgetPassword.signUp')} linkNav={"/signup"} />
    </div>
  );
};

export default ForgetPassword;
