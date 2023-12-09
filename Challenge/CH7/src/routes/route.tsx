import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public/LoginPage";
import AddCars from "../pages/private/cars/AddCars";
import CarsDashboard from "../pages/private/cars/CarsDashboard";
// import LandingPage from "../pages/public/LandingPage";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cars" element={<CarsDashboard />} />
          <Route path="/cars/add" element={<AddCars />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
