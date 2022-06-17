import { combineReducers } from "@reduxjs/toolkit";
import AuthSlices from "./slice/AuthSlice";

export const combineReducer = combineReducers({
  authValue: AuthSlices,
});