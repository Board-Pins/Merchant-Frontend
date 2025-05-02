// src/features/messageSlice.js

import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',  
  initialState: {
    messages: [], // Change to an array to store all messages
    responseModel:[]
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload); // Push new messages into the array
    },
    addresponseModel: (state, action) => {
        state.responseModel.push(action.payload); // Push new messages into the array
      },
  },
});

export const { addMessage ,addresponseModel } = messageSlice.actions;
export default messageSlice.reducer;
