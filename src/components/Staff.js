import React from "react";
import "./css/staff.css";

const Staff = () => {
  return (
    <div className="staff  pb-5">
      <h1 className="h1 text-muted mb-3  mt-5">Our Staff</h1>
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
                document.getElementById("amirData").innerText =
                  "amirsadiqalisaifi@gmail.com";
              }}
            >
              email
            </span>
          </div>
        </div>
        <div id="backgroundImgDivH">
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
