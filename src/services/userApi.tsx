// userApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = import.meta.env.VITE_BASE_URL ? `${import.meta.env.VITE_BASE_URL}` : 'https://api.boardpins.com';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const updatedAccessToken = localStorage.getItem('accessToken');
      if (updatedAccessToken) {
        headers.set('Authorization', `Bearer ${updatedAccessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: '/users-service/users/',
        method: 'POST',
        body: user,
      }),
    }),
    verifyEmail: builder.mutation({
      query: ({ email, otp }) => ({
        url: '/users-service/emails/verify/',
        method: 'POST',
        body: { user_email:email, otp },
      }),
    }),
    getUserInfo: builder.query({
      query: () => '/users-service/users/me/',
      method: 'GET',
    }),
    getUserProfile: builder.query({
      query: () => '/users-service/profiles/',
      method: 'GET',
    }),
    
    resendOtp: builder.mutation({
      query: (email) => ({
        url: '/users-service/emails/resend/',
        method: 'POST',
        body: { email },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users-service/auth/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/users-service/auth/password/reset/',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
        query: ({ otp,email, password, confirmPassword }) => ({
          url: `/users-service/auth/password/reset/confirm/`,
          method: 'POST',
          body: { email,password, otp },
        }),
      }),
    createProfile: builder.mutation({
      query: (profileData) => ({
        url: '/users-service/profiles/create/',
        method: 'POST',
        body: profileData,
      }),
    }),
  }),
});

export const { 
  useSignupMutation, 
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useGetUserInfoQuery,
  useGetUserProfileQuery,
  useResendOtpMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useCreateProfileMutation 
} = userApi;


