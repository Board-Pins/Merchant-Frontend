import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';

// Use the centralized config
export const baseUrl = config.apiBaseUrl;

export const userSingleServicesProviderApi = createApi({
  reducerPath: 'userSingleServicesProviderApi',
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
    fetchCategories: builder.query({
      query: () => '/users-service/profiles/categories/',
      method: 'GET',
    }),
    fetchEgyptCities: builder.query({
      query: () => ({
        url: 'https://countriesnow.space/api/v0.1/countries/cities',
        method: 'POST',
        body: { country: 'Egypt' },
      }),
      transformResponse: (response) => response.data, // Return the cities data
    }),
  }),
});

export const { useFetchCategoriesQuery, useFetchEgyptCitiesQuery } = userSingleServicesProviderApi;

