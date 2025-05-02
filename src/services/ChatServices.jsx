import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Fetch the token from localStorage or wherever you store it
const getToken = () => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4NjE2NzAzLCJpYXQiOjE3MDczMjA3MDMsImp0aSI6IjJlZWZkYThiMGFmZTRkYTFhNjNiZTk4MDJiZDExZTYxIiwidXNlcl9pZCI6MzZ9.BOtvEi1x4FiaoCqB5dEWFUGbZPPGO9KPAxCBHLVCxaQ";

export const chatbotApi = createApi({
  reducerPath: 'chatbotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.mutqinai.com',
    prepareHeaders: (headers) => {
      const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODE1Mzg4LCJpYXQiOjE3MjY1MTkzODgsImp0aSI6Ijg4NjA4MDhmYmIyZDQyOWNiOTk5ZGNiYWY3ZGFlMzdjIiwidXNlcl9pZCI6N30.taYkYAwdlm5VMobIY7q4qliU218gLIzhPqmDQdeNKZg';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createConversation: builder.mutation({
      query: (conversationTitle) => ({
        url: `/api/v1/chatbot/conversations/`,
        method: 'POST',
        body: { title:"untitled" },
      }),
    }),
    sendMessage: builder.mutation({
      query: ({ conversationId, content }) => ({
        url: `/api/v1/chatbot/conversations/${conversationId}/messages/create/`,
        method: 'POST',
        body: { content  ,conversation :conversationId},
      }),
    }),
    getMessages: builder.query({
      query: (conversationId) => ({
        url: `/api/v1/chatbot/conversations/${conversationId}/messages/`,
        method: 'GET',
      }),
    }),
    getConversations: builder.query({
      query: () => ({
        url: `/api/v1/chatbot/conversations/`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateConversationMutation,
  useSendMessageMutation,
  useGetMessagesQuery,
  useGetConversationsQuery,
} = chatbotApi;
