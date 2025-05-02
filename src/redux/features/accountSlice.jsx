import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accountType: localStorage.getItem('provider_type') || ''
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccountType: (state, action) => {
      state.accountType = action.payload;
      localStorage.setItem('provider_type', action.payload);
    }
  }
});

export const { setAccountType } = accountSlice.actions;
export const selectAccountType = (state) => state.account.accountType;

export default accountSlice.reducer;