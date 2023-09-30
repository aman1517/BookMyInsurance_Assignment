import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import TypingAnimation from "../Components/TypingAnimation";

const Home = () => {
  const [data, setDate] = useState([]);
  const [carData, setCarData] = useState("");
  const [carError, setCarError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [iserror, setisError] = useState(false);

  useEffect(() => {
    let localData = {
      data,
      iserror,
      isLoading,
    };
    localStorage.setItem("localSData", JSON.stringify(localData));
  }, [data]);

  const getCarDetails = (Car_No) => {
    setisLoading(true);
    fetch(`https://6322fad1362b0d4e7dd81cf0.mockapi.io/users?car_no=${Car_No}`)
      .then((res) => res.json())
      .then((res) => {
        setDate(res);
      })
      .catch((err) => {
        setisError(true);
      })
      .finally((res) => {
        setisLoading(false);
        window.open("/carDetails", "_blank");
      });
  };

  const HandleSearch = () => {
    let val = carData.split(" ").join("");
    if (carData.length < 6) {
      setCarError(true);
    } else {
      setCarData("");
      getCarDetails(val);
    }
  };
  const myStyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    margin: "5px",
  };
  return (
    <div>
      {isLoading ? (
        <div className="col-md-6 offset-md-3 text-center text-white mt-5 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
            about="loading_igm"
            alt="lading....."
            style={{ borderRadius: "20px" }}
          />
          <h3>Loading.....</h3>
        </div>
      ) : (
        <div
          className="container mt-5 col-md-6 offset-md-3
                            text-center "
        >
          <TypingAnimation text="Sahi Milega, Yahi Milega |" speed={200} />
          <div className="d-flex justify-content-center mb-5">
            <div style={myStyle}>
              <i className="fa fa-car fs-1 mr-5 " aria-hidden="true"></i>
            </div>
          </div>

          <div className=" d-flex justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  value={carData.toUpperCase()}
                  onChange={(e) => {
                    setCarData(e.target.value);
                    setCarError(false);
                  }}
                  className="form-control"
                  placeholder="Serach By Car Number"
                />
                <button className="btn btn-primary" onClick={HandleSearch}>
                  Search
                </button>
              </div>
              {carError && (
                <p className="text-danger">Fill the Proper Number</p>
              )}
            </div>
          </div>
          <div
            className=" d-flex justify-content-center align-items-center border mt-5 shadow rounded"
            style={{ backgroundColor: "#1f224b" }}
          >
            <div className="col-md-12  d-flex text-white p-3 ">
              <i
                className="fa fa-car fs-1"
                aria-hidden="true"
                style={{ marginRight: "5px", color: "burlywood" }}
              ></i>
              <h3 className="mr-3">Brand New Car?</h3>
            </div>
          </div>
          <div
            className=" d-flex justify-content-center align-items-center border mt-5 shadow rounded"
            style={{ backgroundColor: "#1f224b" }}
          >
            <div className="col-md-12  d-flex text-white p-3 ">
              <i
                className="fa fa-car fs-1 "
                aria-hidden="true"
                style={{ marginRight: "5px", color: "burlywood" }}
              ></i>
              <h3 className="mr-3">Renew your policy</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
