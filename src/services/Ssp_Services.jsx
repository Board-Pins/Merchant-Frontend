// src/api/api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the base URL using only the base URL without port
const baseUrl = import.meta.env.VITE_SSP_SERVICES_URL;

// Define the API using createApi from RTK Query
export const sspApi = createApi({
  reducerPath: 'sspApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken'); // Adjust based on your token storage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    submitForm: builder.mutation({
      query: (values) => ({
        url: '/SingleServiceProvider/create-service/', // Your specific endpoint
        method: 'POST',
        body: values, // Directly use the values for the body
      }),
    }),
    // Add other endpoints as needed
  }),
});

// Export the auto-generated hook for the submitForm mutation
export const { useSubmitFormMutation } = sspApi;
