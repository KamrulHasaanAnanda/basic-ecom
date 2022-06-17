import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import ProductPage from "../page/ProductPage";
import RegisterPage from "../page/RegisterPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
