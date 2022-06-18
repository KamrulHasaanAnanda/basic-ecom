// all import

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  singleProducts: [],
  allProducts: [],
  cartValue: 0,
  categorySort: [],
  priceSort: [],
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
    cartData: (state, { payload }) => {
      state.cartValue = payload;
    },
    cartShortData: (state, { payload }) => {
      state.categorySort = payload;
    },
    priceShortData: (state, { payload }) => {
      state.priceSort = payload;
    },
  },
});

export const {
  allProductsData,
  singleProductsData,
  cartData,
  cartShortData,
  priceShortData,
} = ProductSlices.actions;

export default ProductSlices.reducer;
