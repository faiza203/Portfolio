import React from "react";
import "./css/staff.css";

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
            <span>
              <a href="https://github.com/ammy-bajwa">
                <svg
                  class="octicon octicon-mark-github v-align-middle"
                  height="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </span>
            <span className="material-icons-outlined me-4 ms-4">
              <a href="https://www.facebook.com/amirsadiq.ali.10/photos_albums">
                facebook
              </a>
            </span>
            <span
              className="material-icons-outlined amir-email"
              onClick={() => {}}
            >
              <a href="mailto:amirsadiqalisaifi@gmail.com"> email</a>
            </span>
          </div>
        </div>
        <div className="backgroundImgDivH">
          <div className="talhaImage backgroundImgDiv"></div>
          <h2 className="text-muted mt-5">Talha Sadiq Ali</h2>
          <h4 className="parrot ">Cloud Developer</h4>
          <div id="talhaData">
            <span>
              <a href="https://github.com/MuhammadTalha123">
                <svg
                  class="octicon octicon-mark-github v-align-middle"
                  height="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </span>
            <span className="material-icons-outlined me-4 ms-4">
              <a href="https://www.facebook.com/talha.bajwa.522">facebook</a>
            </span>
            <span className="material-icons-outlined">
              <a href="mailto:mt8825130@gmail.com">email</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
