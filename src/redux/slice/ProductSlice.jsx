// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  singleProducts: [],
  allProducts: [],
};

export const ProductSlices = createSlice({
  name: "shopUtils",
  initialState,
  reducers: {
    allProductsData: (state, { payload }) => {
      state.allProducts = payload;
    },
    singleProductsData: (state, { payload }) => {
      state.singleProducts = payload;
    },
  },
});

export const { allProductsData, singleProductsData } = ProductSlices.actions;

export default ProductSlices.reducer;
