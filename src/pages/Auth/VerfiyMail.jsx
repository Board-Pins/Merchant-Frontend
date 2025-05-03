import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CustomSubmitBtn from "../../components/auth/Atoms/CustomSubmitBtn";
import { useGetUserInfoQuery, useVerifyEmailMutation, useResendOtpMutation } from "../../services/userApi";
import { useTranslation } from "react-i18next";


export default function VerifyMail() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(59);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [verifyEmail, { isLoading: isVerifying, isError, isSuccess }] = useVerifyEmailMutation();
  const [resendOtp, { isLoading: isResending, isError: resendError, isSuccess: resendSuccess }] = useResendOtpMutation();
  const { data: userInfo, refetch: refetchUserInfo, error: userInfoError, isLoading: isUserInfoLoading } = useGetUserInfoQuery(undefined, {
    skip: !localStorage.getItem('accessToken'),
  });

  const navigate = useNavigate();
  const { email } = useParams();
  
  console.log("Email from params:", email); // Debug log
  
  // Add a check to ensure email is available
  useEffect(() => {
    if (!email) {
      console.error("Email parameter is missing");
      // Redirect to login if email is missing
      navigate('/login');
    }
  }, [email, navigate]);

  const validationSchema = Yup.object().shape({
    otp1: Yup.string().matches(/^\d{1}$/, t("invalid_otp")).required(t("required")),
    otp2: Yup.string().matches(/^\d{1}$/, t("invalid_otp")).required(t("required")),
    otp3: Yup.string().matches(/^\d{1}$/, t("invalid_otp")).required(t("required")),
    otp4: Yup.string().matches(/^\d{1}$/, t("invalid_otp")).required(t("required")),
    otp5: Yup.string().matches(/^\d{1}$/, t("invalid_otp")).required(t("required")),
    otp6: Yup.string().matches(/^\d{1}$/, t("invalid_otp")).required(t("required"))
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success(t('email_verified'));
      // refetchUserInfo();
      setTimeout(() => {
        navigate(`/myboard`);
      }, 2000);
    }
  }, [isSuccess, refetchUserInfo, navigate, t]);

  useEffect(() => {
    if (resendSuccess) {
      toast.success(t('code_resent'));
      setTimeLeft(59);
    } else if (resendError) {
      toast.error(t('resend_failed'));
    }
  }, [resendSuccess, resendError, t]);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      refetchUserInfo();
    }
  }, [refetchUserInfo]);

  const focusNextInput = (index) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleInput = (e, index, setFieldValue) => {
    const { value } = e.target;
    if (value.length === 1) {
      setFieldValue(`otp${index + 1}`, value);
      focusNextInput(index);
    } else if (value === '') {
      setFieldValue(`otp${index + 1}`, '');
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value) {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleResendCode = async (resetForm) => {
    console.log("Resending OTP to email:", email);
    
    if (email) {
      try {
        await resendOtp(email).unwrap();
        resetForm();
      } catch (error) {
        console.error("Resend error:", error);
        toast.error(t('resend_error'));
      }
    } else {
      console.error("No email found for resending OTP");
      toast.error(t('no_email_found'));
    }
  };
  const handleSubmit = async (values) => {
    const otp = values.otp1 + values.otp2 + values.otp3 + values.otp4 + values.otp5 + values.otp6;
    console.log("Submitting OTP:", otp, "for email:", email);

    try {
      await verifyEmail({ email, otp }).unwrap();
    } catch (error) {
      console.error("Verification error:", error);
      const errorMessage = error?.data?.data?.errors?.en || t('verification_failed');
      toast.error(errorMessage);
    }
  };

  if (isUserInfoLoading) return <div>{t('loading_user_info')}</div>;
  if (userInfoError) return <div>{t('error')}: {userInfoError.message}</div>;

  return (
    <section className="Auth mb-5 mt-12">
      <div className="mx-14">
        <Formik
          initialValues={{ otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, resetForm }) => (
            <Form className="mt-3 xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-7">
              <div className="py-5 text-center  text-5xl md:text-4xl font-bold md:leading-7 text-gray-800">
                {t('verify_email')}
              </div>
              <div className="w-full flex flex-col pt-1 gap-2 text-center">
                <span className="text-2xl  font-normal text-gray-800">
                  {t('code_sent_to')} <span className="text-[#6161FF]">{userInfo?.email || email}</span>
                </span>
                <span className="text-2xl  font-normal text-gray-800">
                  {t('enter_code_to_verify')}
                </span>
              </div>
              <div className="text-center mt-12">{t('enter_your_code')}</div>
              <div className="flex justify-center py-5 space-x-4">
                {inputRefs?.map((inputRef, index) => (
                  <Field
                    key={index}
                    innerRef={inputRef}
                    type="text"
                    name={`otp${index + 1}`}
                    maxLength="1"
                    placeholder={`${index + 1}`}
                    className="form-input block w-12 px-4 py-3 leading-tight bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500 text-center"
                    onChange={(e) => handleInput(e, index, setFieldValue)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <ErrorMessage name="otp6" component="div" className="text-red-500 mt-1" />
              <div className="text-center">
                <span className="text-[##1E1E1E]">{t('didnt_receive_code')}</span>
                <button
                  className={`px-3 text-[#0685FA] underline  ${timeLeft > 0 ? 'cursor-not-allowed' : ''}`}
                  onClick={() => handleResendCode(resetForm)}
                  disabled={timeLeft > 0 || isResending}
                  type="button"
                >
                  {t('resend_code')}
                </button>
              </div>
              <div className="text-center text-[#6161FF] py-2">
                <span>{t('resend_code_in')} {`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</span>
              </div>
              <div className="py-5 lg:px-24">
                <CustomSubmitBtn
                  nameBtn={isVerifying ? t('loading') : t('send_the_link')}
                  disabled={isVerifying}
                />
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </section>
  );
}




