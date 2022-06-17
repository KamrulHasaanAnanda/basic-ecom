import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
