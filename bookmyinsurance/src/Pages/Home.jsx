import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setDate] = useState([]);
  const [carData, setCarData] = useState("");
  const [carError, setCarError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [iserror, setisError] = useState(false);

  useEffect(() => {}, []);

  const getCarDetails = (Car_No) => {
    setisLoading(true);
    fetch(`https://6322fad1362b0d4e7dd81cf0.mockapi.io/users?name=${Car_No}`)
      .then((res) => res.json())
      .then((res) => {
        setDate(res);
        console.log(res, "res");
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
    let val = carData.split(" ").join(" ");
    if (carData.length < 4) {
      setCarError(true);
    } else {
      console.log(val);

      setCarData("");

      getCarDetails(val);
      let localData = {
        carError,
        data,
        iserror,
        isLoading,
      };
      localStorage.setItem("localSData", JSON.stringify(localData));
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
        <div>
          <img
            src="https://media.istockphoto.com/id/1302436594/video/loading-circle-icon-animation-on-white-background-4k-video-loopable-preloader.jpg?s=640x640&k=20&c=JQzv8UsXNfUnqQSULYW8B858UOM2O5CoXRgG9a0hRFk="
            about="loading_igm"
          />
        </div>
      ) : (
        <div className="container mt-5">
          <div className="d-flex justify-content-center mb-5">
            <div style={myStyle}>
              <i class="fa fa-car fs-1 mr-5 " aria-hidden="true"></i>
            </div>
            <div style={myStyle}>
              <i class="fa fa-car fs-1 mr-5" aria-hidden="true"></i>
            </div>
            <div style={myStyle}>
              <i class="fa fa-car fs-1" aria-hidden="true"></i>
            </div>
          </div>

          <div className=" d-flex justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  value={carData}
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
        </div>
      )}
    </div>
  );
};

export default Home;
