import React from "react";
import { useNavigate } from "react-router-dom";

const Insurace = () => {
  const navigate = useNavigate();
  const [process, setProcess] = React.useState(true);
  let data = JSON.parse(localStorage.getItem("IncData"));

  const HandlePay = () => {
    setProcess(true);
    setTimeout(() => {
      navigate("/");
      localStorage.clear();
      setProcess(false);
    }, 5000);
  };
  return (
    <div style={{ backgroundColor: "#292d63" }}>
      {process && (
        <div
          className="modal fade"
          id="exampleModal"
          tableindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Payment Process...
                </h5>
              </div>
              <div className="modal-body">
                <img src="https://i.gifer.com/HI9M.gif" alt="processing" />
              </div>
              <div className="modal-footer">
                <p>You will be redirect on home page after process complete</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {data ? (
        <div className="container mt-5  ">
          <div className="row ">
            <div
              className="col-md-6 offset-md-3 text-center  border p-4"
              style={{ backgroundColor: "#1f224b" }}
            >
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={HandlePay}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-ls-6" style={{ height: "350px" }}>
          <h2 className="text-white mt-5 ">Plese Select A Paln First</h2>
        </div>
      )}
    </div>
  );
};

export default Insurace;
