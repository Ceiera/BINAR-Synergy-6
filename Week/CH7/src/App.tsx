import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
