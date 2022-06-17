import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
