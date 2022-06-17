import { combineReducers } from "@reduxjs/toolkit";
import AuthSlices from "./slice/AuthSlice";
import ProductSlices from "./slice/ProductSlice";

export const combineReducer = combineReducers({
  authValue: AuthSlices,
  productValue: ProductSlices,

});