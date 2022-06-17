// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  authenticated: false,
  loading: true,
  currentUser: [],
};

export const AuthSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    authenticatedData: (state, { payload }) => {
      state.authenticated = payload;
    },
    getCurrentUserData: (state, { payload }) => {
      state.currentUser = payload;
    },
    getLoadingData: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { authenticatedData, getCurrentUserData, getLoadingData } =
  AuthSlices.actions;

export default AuthSlices.reducer;
