import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the base URL dynamically using environment variables
const baseUrl = `${import.meta.env.VITE_Workspaces_URL}:${import.meta.env.VITE_Workspaces_PORT}`;

// Define the API using createApi from RTK Query
export const workspacesApi = createApi({
  reducerPath: 'workspacesApi',
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
    GetAllWorkspaces: builder.mutation({
      query: ({ user_uuid, ...values }) => ({
        url: '/WorkSpaces/workspace/', // Your specific endpoint
        method: 'GET',
        params: { user_uuid, ...values }, // Include user_uuid in params
      }),
    }),
    // Add other endpoints as needed
  }),
});

// Export the auto-generated hook for the GetAllWorkspaces mutation
export const { useGetAllWorkspacesMutation } = workspacesApi;
