import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    color: "white",
  };
  return (
    <div>
      <div
        style={{
          border: "1px sold black",
          height: "55px",
          backgroundColor: "#292d63",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img
          src="https://bookmyinsurance.com/static/media/bmilogo.17a9b8f2.png"
          alt="logo"
        />
        <Link to="/" style={{ color: "white", border: "none" }}>
          Home
        </Link>
        <Link to="/carDetails">Car Details</Link>
        <Link to="/insurace">Incorance</Link>
      </div>
    </div>
  );
};

export default Navbar;
