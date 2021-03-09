import React from "react";
import "./css/staff.css";

const Staff = () => {
  return (
    <div className="staff">
      <h1 className="h1 text-muted mb-3  mt-5">Our Staff</h1>
      <div className="staffDetail mt-5">
        <div>
          <div className="amirImage backgroundImgDiv"></div>
          <h3 className="text-muted mt-3">Amir Sadiq Ali</h3>
          <h5 className=" parrot">BlockChain Developer</h5>
        </div>
        <div>
          <div className="talhaImage backgroundImgDiv"></div>
          <h3 className="text-muted mt-3">Talha Sadiq Ali</h3>
          <h5 className="parrot">Cloud Developer</h5>
        </div>
      </div>
    </div>
  );
};

export default Staff;
