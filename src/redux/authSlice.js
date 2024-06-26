import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userId: null,
  token: null,
  isPremium: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.token = null;
      state.isPremium = false;
    },
    activatePremium: (state) => {
      state.isPremium = true;
    },
  },
});

export const { login, logout, activatePremium } = authSlice.actions;
export default authSlice.reducer;
