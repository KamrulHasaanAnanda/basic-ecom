import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import ProductPage from "../page/ProductPage";
import RegisterPage from "../page/RegisterPage";
import SingleProductPage from "../page/SingleProductPage";
import {
  authenticatedFunction,
  loadingFunction,
} from "../redux/action/AuthAction";
import { getToken, setToken } from "../utils/functions";

function Router() {
  const { authenticated, loading } = useSelector((state) => state.authValue);
  let dispatch = useDispatch();

  useEffect(() => {
    const access_token = getToken();
    if (access_token) {
      dispatch(loadingFunction(false));
      dispatch(authenticatedFunction(true));
    } else {
      dispatch(loadingFunction(false));
      // setLoading(false);
      setToken("");
    }
  }, [authenticated]);
  return loading ? (
    <h2>Loading........</h2>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<ProductPage />} />
        <Route path="/:id" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
