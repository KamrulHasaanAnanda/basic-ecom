import ProductServices from "../../services/ProductServices";
import { ProductSlices } from "../slice/ProductSlice";

const { actions: slice } = ProductSlices;

export const getAllProductFunction = () => async (dispatch) => {
  let res = await ProductServices.all();
  dispatch(slice.allProductsData(res.data));
};

export const getSingleProductFunction = (id) => async (dispatch) => {
  let res = await ProductServices.single(id);
  dispatch(slice.singleProductsData(res));
};

export const getCartValue = (data) => (dispatch) => {
  // console.log("data :>> ", data);
  dispatch(slice.cartData(data));
};
export const getCatogoryValue = (data) => (dispatch) => {
  // console.log("data :>> ", data);
  dispatch(slice.cartShortData(data));
};
