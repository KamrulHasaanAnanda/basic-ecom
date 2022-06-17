import { AuthSlices } from "../slice/AuthSlice";

const { actions: slice } = AuthSlices;

export const loadingFunction = (data) => (dispatch) => {
  dispatch(slice.getLoadingData(data));
};

export const authenticatedFunction = (data) => (dispatch) => {
  dispatch(slice.authenticatedData(data));
};

export const setUserFunction = (data) => (dispatch) => {
  dispatch(slice.getCurrentUserData(data));
};
