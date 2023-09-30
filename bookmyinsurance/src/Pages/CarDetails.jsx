import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const policyQuotes = [
  {
    id: 1,
    vendor: "SBI General Insurance",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/22.png",
    quote: "$500",
  },
  {
    id: 2,
    vendor: "National Insurance",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/6.png",
    quote: "$600",
  },
  {
    id: 3,
    vendor: " HDFC ERGO",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/13.png",
    quote: "$600",
  },
  {
    id: 4,
    vendor: "Relince",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/1.png",
    quote: "$600",
  },
  // Add more vendors and quotes as needed
];

const CarDetails = () => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("localSData"));

  function HandleChek(e) {
    let obj = {
      vendor: e.vendor,
      img: e.image,
      ammount: e.quote,
    };
    localStorage.setItem("IncData", JSON.stringify(obj));

    navigate("/insurace");
  }

  return (
    <div className="mt-5">
      {data?.data?.length > 0 ? (
        <div>
          <div className="container d-flex align-items-center justify-content-center ">
            <div className="card text-center" key={data.data[0]?.id}>
              <img
                src={data?.data[0]?.img}
                className="card-img-top"
                alt="Car Image"
              />
              <div className="card-body">
                <h5 className="card-title">Car Information</h5>
                <p className="card-text">
                  <strong>Car Number:</strong> {data?.data[0]?.car_no}
                </p>
                <p className="card-text">
                  <strong>Car Name:</strong> {data?.data[0]?.car_name}
                </p>
                <p className="card-text">
                  <strong>Owner Name:</strong> {data?.data[0]?.onwer_Name}
                </p>
                <p className="card-text">
                  <strong>Expiration Date:</strong> {data?.data[0]?.exp_date}
                </p>
              </div>
            </div>
          </div>
          <div className="row col-lg-12 col-md-12 col-sm-12 mb-4  ">
            <div>
              {policyQuotes.map((e) => {
                return (
                  <div
                    className="container col-md-6 offset-md-3
                            text-center  d-flex  justify-content-between  border mt-5 text-white  shadow rounded pt-3"
                    style={{ backgroundColor: "#1f224b", height: "100px" }}
                    key={e.id}
                  >
                    <img
                      src={e.image}
                      alt="sbi"
                      style={{ width: "10%", height: "55%" }}
                    />
                    <h2>{e.vendor}</h2>
                    <p> IDV Cover:{e.quote}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ height: "55%" }}
                      onClick={() => HandleChek(e)}
                    >
                      Know More
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          ;
        </div>
      ) : data?.data == "Not found" ? (
        <div className="mt-5 ">
          <img
            src="https://img.freepik.com/premium-vector/something-went-wrong-neon-text_118419-43.jpg"
            alt="Something Went Wrong"
          />
        </div>
      ) : (
        <div className="mt-5 ">
          <img
            src="https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png"
            alt="No Data Fount"
          />
        </div>
      )}
    </div>
  );
};

export default CarDetails;
