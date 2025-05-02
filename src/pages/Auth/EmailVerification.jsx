
import React, { useEffect } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../services/userApi';

const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const userEmail = params.get('user_email');
  const otp = params.get('otp');
  
  // Use the verifyEmail mutation
  const [verifyEmail, { isLoading, isSuccess, isError, error }] = useVerifyEmailMutation();

  useEffect(() => {
    if (userEmail && otp) {
      // Trigger the mutation to verify the email with OTP
      verifyEmail({ email: userEmail, otp });
    }
  }, [userEmail, otp, verifyEmail]);

  useEffect(() => {
    if (isSuccess) {
      // Navigate to the login page upon success
      navigate('/login', { replace: true });
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Loader while verifying */}
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-16 h-16 mb-4"></div>
          <p className="text-lg text-gray-700">Verifying your email...</p>
        </div>
      ) : isSuccess ? (
        <p className="text-lg text-green-500">Email verified successfully!</p>
      ) : isError ? (
        <p className="text-lg text-red-500">Error: {error.message}</p>
      ) : null}
    </div>
  );
};

export default EmailVerification;
