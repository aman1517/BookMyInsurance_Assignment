import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const policyQuotes = [
  {
    vendor: "SBI General Insurance",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/22.png",

    quote: "$500",
  },
  {
    vendor: "HDFC ERGO",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/6.png",

    quote: "$600",
  },
  {
    vendor: "National Insurance",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/13.png",

    quote: "$600",
  },
  {
    vendor: "Relince",
    image: "https://static.pbcdn.in/car-cdn/car2.0/insurer/1.png",

    quote: "$600",
  },
  // Add more vendors and quotes as needed
];

const CarDetails = () => {
  let data = JSON.parse(localStorage.getItem("localSData"));
  console.log(data.data, "datadatadata");

  return (
    <div>
      {data?.data?.length > 0 ? (
        <div>
          <div className="container d-flex align-items-center justify-content-center ">
            <div className="card text-center">
              <img
                src={data.data[0].img}
                className="card-img-top"
                alt="Car Image"
              />
              <div className="card-body">
                <h5 className="card-title">Car Information</h5>
                <p className="card-text">
                  <strong>Car Number:</strong> {data.data[0].car_no}
                </p>
                <p className="card-text">
                  <strong>Car Name:</strong> {data.data[0].car_name}
                </p>
                <p className="card-text">
                  <strong>Owner Name:</strong> {data.data[0].onwer_Name}
                </p>
                <p className="card-text">
                  <strong>Expiration Date:</strong> {data.data[0].exp_date}
                </p>
              </div>
            </div>
          </div>
          <div className="row col-lg-12 col-md-12 col-sm-12 mb-4  ">
            <div>
              {policyQuotes.map((e) => {
                return (
                  <div
                    className="container d-flex  justify-content-between  border mt-5 text-white  shadow rounded pt-3"
                    style={{ backgroundColor: "#1f224b", height: "100px" }}
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
                      class="btn btn-primary"
                      style={{ height: "55%" }}
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
        <p>SomeThing went Wrong</p>
      ) : (
        <h2>No Data Found</h2>
      )}
    </div>
  );
};

export default CarDetails;
