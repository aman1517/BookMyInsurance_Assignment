import React from "react";
import { Routes, Route } from "react-router-dom";
import CarDetails from "../Pages/CarDetails";
import Home from "../Pages/Home";
import Insurace from "../Pages/Insurace";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carDetails" element={<CarDetails />}></Route>
        <Route path="/insurace" element={<Insurace />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
