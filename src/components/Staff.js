import React from "react";
import "./css/staff.css";

const Staff = () => {
  return (
    <div className="staff">
      <h1 className="h1 text-muted mb-3">Our Staff</h1>
      <div className="staffDetail">
        <div>
          <div className="amirImage backgroundImgDiv"></div>
          <p className="text-muted mt-3">Amir Sadiq Ali</p>
          <p className=" parrot">BlockChain Developer</p>
        </div>
        <div>
          <div className="talhaImage backgroundImgDiv"></div>
          <p className="text-muted mt-3">Talha Sadiq Ali</p>
          <p className="parrot">Cloud Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
