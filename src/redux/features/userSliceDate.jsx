// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/userApi';

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload; // If user is not null, mark as authenticated
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUserInfo.matchFulfilled,
      (state, { payload }) => {
        // Automatically update the slice when user info is fetched
        state.user = payload;
        state.isAuthenticated = true;
      }
    );
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;
