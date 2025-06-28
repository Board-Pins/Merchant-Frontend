// userApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = import.meta.env.VITE_BASE_URL ? `${import.meta.env.VITE_BASE_URL}` : 'https://api.boardpins.com';

// Helper function to handle token refresh
const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) return false;

  try {
    const response = await fetch(`${baseUrl}/users-service/auth/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) throw new Error('Refresh failed');

    const data = await response.json();
    localStorage.setItem('accessToken', data.access);
    return true;
  } catch (error) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return false;
  }
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    responseHandler: async (response) => {
      console.log('API Response status:', response.status, 'for URL:', response.url);

      // Handle token expiration
      if (response.status === 401) {
        console.log('401 error detected, attempting token refresh');
        const refreshed = await refreshToken();
        if (refreshed) {
          console.log('Token refreshed successfully, retrying request');
          // Retry the original request with new token
          const retryResponse = await fetch(response.url, {
            method: response.request.method,
            headers: {
              ...response.request.headers,
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: response.request.body,
          });
          return retryResponse.json();
        } else {
          console.log('Token refresh failed, redirecting to login');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
      }
      return response.json();
    },
  }),
  endpoints: (builder) => ({
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: '/users-service/auth/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
      }),
    }),
    signup: builder.mutation({
      query: (user) => ({
        url: '/users-service/users/',
        method: 'POST',
        body: user,
      }),
      transformResponse: (response) => {
        console.log('Signup successful response:', response);
        return response;
      },
      transformErrorResponse: (error) => {
        console.error('Signup error response:', error);
        // If it's a parsing error but the status is 201, it's actually a success
        if (error.status === 'PARSING_ERROR' && error.originalStatus === 201) {
          try {
            // Try to parse the data string
            const parsedData = JSON.parse(error.data);
            return { success: true, data: parsedData };
          } catch (e) {
            console.error('Failed to parse response data:', e);
          }
        }
        return error;
      },
    }),
    verifyEmail: builder.mutation({
      query: ({ email, otp }) => ({
        url: '/users-service/emails/verify/',
        method: 'POST',
        body: { user_email: email, otp },
      }),
    }),
    getUserInfo: builder.query({
      query: () => '/users-service/users/me/',
      method: 'GET',
    }),
    getUserProfile: builder.query({
      query: () => '/users-service/profiles',
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
    logout: builder.mutation({
      query: () => ({
        url: '/users-service/auth/logout/',
        method: 'POST',
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
      query: ({ otp, email, password, confirmPassword }) => ({
        url: `/users-service/auth/password/reset/confirm/`,
        method: 'POST',
        body: { email, password, otp },
      }),
    }),
    createProfile: builder.mutation({
      query: (profileData) => ({
        url: '/users-service/profiles/create/',
        method: 'POST',
        body: profileData,
      }),
    }),
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: '/users-service/profiles/update/',
        method: 'PUT',
        body: profileData,
      }),
    }),
    partialUpdateProfile: builder.mutation({
      query: (profileData) => ({
        url: '/users-service/profiles/update/',
        method: 'PATCH',
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
  useCreateProfileMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useUpdateProfileMutation,
  usePartialUpdateProfileMutation
} = userApi;
