import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AddCars from "../pages/cars/AddCars";
import CarsDashboard from "../pages/cars/CarsDashboard";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cars" element={<CarsDashboard />} />
          <Route path="/cars/add" element={<AddCars />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
