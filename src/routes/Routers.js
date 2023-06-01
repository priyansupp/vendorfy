import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Vendors from "../pages/Vendors";
// import PizzaDetails from "../pages/PizzaDetails";
import MapPage from "../pages/MapPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/vendors" element={<Vendors />} />
      {/* <Route path="/vendors/:id" element={<PizzaDetails />} /> */}
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
};

export default Routers;
