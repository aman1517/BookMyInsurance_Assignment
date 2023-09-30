import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          border: "1px sold black",
          height: "55px",
          backgroundColor: "#292d63",
          color: "white",
          display: "flex",
          paddingTop: "10px",
          justifyContent: "space-around",
        }}
      >
        <img
          src="https://bookmyinsurance.com/static/media/bmilogo.17a9b8f2.png"
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <Link to="/" style={{ color: "white", border: "none" }}>
          Home
        </Link>
        <Link to="/carDetails" style={{ color: "white", border: "none" }}>
          Car Details
        </Link>
        <Link to="/insurace" style={{ color: "white", border: "none" }}>
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
