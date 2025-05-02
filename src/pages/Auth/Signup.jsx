import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomGoagleBtn from '../../components/auth/Atoms/CustomGoagleBtn';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';
import { baseUrl, useSignupMutation } from '../../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const { t } = useTranslation();  // Initialize the translation hook
  const [signup, { isLoading, error, isSuccess }] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);

  const validationSchema = Yup.object({
    email: Yup.string().email(t('signup.invalidEmail')).required(t('signup.emailRequired')),
    password: Yup.string()
      .required(t('signup.passwordRequired'))
      .matches(/[A-Za-z]/, t('signup.passwordLetter'))
      .matches(/[0-9]/, t('signup.passwordNumber')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('signup.passwordMatch'))
      .required(t('signup.confirmPasswordRequired')),
    terms: Yup.bool().oneOf([true], t('signup.termsRequired')),
  });

  const initialValues = {
    email: '',
    password: '',
    terms: false,
    role: "Merchant"
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const payload = {
      email: values.email,
      password: values.password,
      terms: values.terms,
      role: "Provider",
    };

    try {
      const response = await signup(payload).unwrap();
      
      // Set initial profile data
      localStorage.setItem('profileData', JSON.stringify({
        email: values.email,
        step: 1
      }));
      
      // Remove this flag only after profile setup is complete
      localStorage.removeItem('hasCompletedSetup');
      
      toast.success(t('signup.successSignup'), {
        position: 'top-right',
      });

      setResponse(response);

      setTimeout(() => {
        navigate(`/verifymail/${values.email}`);
      }, 2000);
    } catch (err) {
      const errorMessage = Array.isArray(err.data.email) 
        ? err.data.email.join(', ') 
        : err.data.email || t('signup.errorSignup');
      toast.error(errorMessage, {
        position: 'top-right',
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (response) {

      localStorage.setItem('accessToken', response.data.tokens.access);
      localStorage.setItem('refreshToken', response.data.tokens.refresh);
    }
  }, [response]);

  return (
    <div className='pb-3 lg:mt-0 py-8 lg:py-0'>
      <ToastContainer />
      <header>
        <CustomTitle title={t('signup.title')} subTitle={t('signup.subTitle')} />
      </header>
      <main className='flex justify-center items-center pb-6'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='lg:w-[450px] w-full mx-12'>
              <div className='py-8'>
                <CustomGoagleBtn path={`${baseUrl}/google-login/`} />
                <div className='relative mt-6 border-t-[1px] border-[#B0B0B0] w-full flex justify-center items-center'>
                  <span className='absolute bg-white px-5 text-md text-[#B0B0B0]'>{t('signup.or')}</span>
                </div>
              </div>
              <CustomInput
                type='email'
                label={t('signup.emailLabel')}
                placeholder={t('signup.emailPlaceholder')}
                name='email'
              />
              <CustomInput
                type='password'
                label={t('signup.passwordLabel')}
                placeholder={t('signup.passwordPlaceholder')}
                name='password'
              />
              <CustomInput
                type='password'
                label={t('signup.confirmPasswordLabel')}
                placeholder={t('signup.confirmPasswordPlaceholder')}
                name='confirmPassword'
              />
              <CustomInput
                type='checkbox'
                label={t('signup.termsLabel')}
                name='terms'
              />
              <CustomSubmitBtn nameBtn={isSubmitting ? t('signup.loading') : t('signup.createAccount')} />
            </Form>
          )}
        </Formik>
      </main>
      <CustomTextNav title={t('signup.alreadyHaveAccount')} linkName={t('signup.login')} linkNav="/login" />
    </div>
  );
};

export default Signup;
