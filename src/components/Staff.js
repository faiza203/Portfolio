import React from "react";
import "./css/staff.css";

const GoBack = ({ id }) => {
  return (
    <button
      className="btn btn-outline-primary"
      onClick={() => {
        return (id = "amir" ? <div></div> : <div></div>);
      }}
    >
      Done
    </button>
  );
};

const Staff = () => {
  return (
    <div className="staff  pb-5">
      <h1 className="h1 text-muted mb-3  mt-5 text-uppercase">Our Staff</h1>
      <div className="staffDetail mt-5 mb-5">
        <div id="backgroundImgDivH">
          <div className="amirImage backgroundImgDiv"></div>
          <h2 className="text-muted mt-5">Amir Sadiq Ali</h2>
          <h4 className=" parrot">BlockChain Developer</h4>
          <div id="amirData">
            <span className="material-icons-outlined">phone</span>
            <span className="material-icons-outlined me-4 ms-4">facebook</span>
            <span
              className="material-icons-outlined amir-email"
              onClick={() => {
               return document.getElementById("amirData").innerHTML = (
                  <div>
                    <h1>amirsadiqalisaifi@gmail.com</h1>
                    <GoBack id="amir"/>
                  </div>
                );
              }}
            >
              email
            </span>
          </div>
        </div>
        <div className="backgroundImgDivH">
          <div className="talhaImage backgroundImgDiv"></div>
          <h2 className="text-muted mt-5">Talha Sadiq Ali</h2>
          <h4 className="parrot ">Cloud Developer</h4>
          <div>
            <span className="material-icons-outlined">phone</span>
            <span className="material-icons-outlined me-4 ms-4">facebook</span>
            <span className="material-icons-outlined">email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
