import React from "react";
import "./css/staff.css";

let amirDetail = false;
let talhaDetail = false;
let amirDetailElement = "";

const DoneBack = ({ id, element }) => {
  return (
    <div className="d-inline-flex mt-3">
      <h1 style={{ color: "deepskyblue" }} className="me-3">
        {element}
      </h1>
      <button
        className="btn btn-outline-success"
        onClick={() =>
          id === "amir" ? (amirDetail = false) : (talhaDetail = false)
        }
      >
        Done
      </button>
    </div>
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
          {!amirDetail ? (
            <div id="amirData">
              <span
                className="material-icons"
                onClick={() => {
                  amirDetailElement = "+923040659006";
                  return (amirDetail = true);
                }}
              >
                phone
              </span>
              <span className="material-icons-outlined me-4 ms-4">
                facebook
              </span>
              <button
                onClick={() => {
                  amirDetail = true;
                  return amirDetailElement = "amirsadiqalisaifi@gmail.com";
                }}
              >
                <span className="material-icons-outlined amir-email">
                  email
                </span>
              </button>
            </div>
          ) : (
            <div>
              <DoneBack element={amirDetailElement} id="amir" />
            </div>
          )}
        </div>
        <div className="backgroundImgDivH">
          <div className="talhaImage backgroundImgDiv"></div>
          <h2 className="text-muted mt-5">Talha Sadiq Ali</h2>
          <h4 className="parrot ">Cloud Developer</h4>
          {!talhaDetail ? (
            <div id="talhaData">
              <span className="material-icons">phone</span>
              <span className="material-icons-outlined me-4 ms-4">
                facebook
              </span>
              <span className="material-icons-outlined">email</span>
            </div>
          ) : (
            <div>
              <p id="detailTalha"></p>
              <DoneBack />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Staff;
