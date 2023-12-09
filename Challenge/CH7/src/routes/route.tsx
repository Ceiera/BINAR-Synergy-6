import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public/LoginPage";
import CreateCar from "../pages/private/cars/CreateCar";
import CarsDashboard from "../pages/private/cars/CarsDashboard";
import UpdateCar from "../pages/private/cars/UpdateCar";
// import LandingPage from "../pages/public/LandingPage";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cars" element={<CarsDashboard />} />
          <Route path="/cars/create" element={<CreateCar />} />
          <Route path="/cars/update/:id" element={<UpdateCar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
