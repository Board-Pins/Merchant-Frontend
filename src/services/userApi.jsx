// userApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const baseUrl = import.meta.env.VITE_BASE_URL ? `${import.meta.env.VITE_BASE_URL}` : 'https://api.boardpins.com';

// Helper function to handle token refresh
const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) return false;

  try {
    const response = await fetch(`${baseUrl}/users-service/auth/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
      credentials: 'include', // Important for cookies
    });

    if (!response.ok) throw new Error('Refresh failed');

    const data = await response.json();
    Cookies.set('accessToken', data.access, { 
      secure: true, 
      sameSite: 'strict',
      expires: 1 // 1 day
    });
    return true;
  } catch (error) {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    return false;
  }
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = Cookies.get('accessToken') || localStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include', // Important for cookies
    responseHandler: async (response) => {
      // Handle token expiration
      if (response.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
          // Retry the original request with new token
          const retryResponse = await fetch(response.url, {
            method: response.request.method,
            headers: {
              ...response.request.headers,
              Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
            body: response.request.body,
            credentials: 'include',
          });
          return retryResponse.json();
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
      query: () => 'users-service/profiles',
      method: 'GET',
      // Add error handling
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error('Error fetching user profile:', error);
          // If unauthorized, you might want to clear tokens
          if (error?.error?.status === 401) {
            console.log('Unauthorized access, clearing tokens');
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
          }
        }
      },
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
  useRefreshTokenMutation
} = userApi;








