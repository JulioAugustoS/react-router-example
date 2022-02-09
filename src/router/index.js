import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="sobre" element={<About />} />
      <Route path="usuario" element={<User />} />
    </Routes>
  );
};

export default AppRoutes;
