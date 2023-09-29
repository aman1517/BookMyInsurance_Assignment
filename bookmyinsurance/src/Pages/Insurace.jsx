import React from "react";

const Insurace = () => {
  let data = JSON.parse(localStorage.getItem("IncData"));
  console.log(data, "data");
  return (
    <div>
      {data ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center bg-success">
              <div className="col-md-6 offset-md-3 text-center text-white">
                <img src={data.img} alt="carpic" />
                <h2>{data.vendor}</h2>
                <p>Ammount: {data.ammount} </p>
                <h4>Car Insurance Policy</h4>
                <ul>
                  <li>Coverage:</li>
                  <li>Insured Vehicle:</li>
                  <li>Premium Payments:</li>
                  <li>Exclusions:</li>
                  <li> Deductibles:</li>
                  <li>Third-Party Liabilit</li>
                </ul>
                <button type="button" className="btn btn-primary">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Plese Select A Paln First</h2>
      )}
    </div>
  );
};

export default Insurace;
