import React from "react";
import "./css/navbar.css";

const addColorStyle = (pId, aId) => {
  const aIDS = [
    "href-home",
    "href-services",
    "href-projects",
    "href-about",
    "href-contact",
  ];
  const pIDS = [
    "link-home",
    "link-services",
    "link-projects",
    "link-about",
    "link-contact",
  ];
  document.getElementById(pId).classList.add("link-visible");
  aIDS.forEach((aID) => {
    aID !== aId
      ? document.getElementById(aID).classList.remove("link-visible-a")
      : document.getElementById(aId).classList.add("link-visible-a");
  });
  pIDS.forEach((pID) => {
    pID !== pId
      ? document.getElementById(pID).classList.remove("link-visible")
      : document.getElementById(pId).classList.add("link-visible");
  });
};

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container-fluid">
        <div className="navbar-brand text-uppercase">
          <i className="far fa-snowflake me-2" aria-hidden="true"></i>
          Faiza<span>Fiaz</span>
          <i className="far fa-snowflake ms-2" aria-hidden="true"></i>
        </div>
        <button
          className="navbar-toggler"
          type="submit"
          onClick={() => {
            const classListNavbar = document.getElementById(
              "navbarSupportedContent"
            ).classList;
            if (
              classListNavbar[0] === "collapse" ||
              classListNavbar[1] === "collapse"
            ) {
              document.getElementById("navbar").style.position = "fixed";
              document.getElementById("navbar").style.backgroundColor = "black";
              document
                .getElementById("navbarSupportedContent")
                .classList.remove("collapse");
            } else {
              document
                .getElementById("navbarSupportedContent")
                .classList.add("collapse");
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-link navbar-nav d-inline-flex list-unstyled"
            id="navbar"
          >
            <li className="nav-item">
              <a
                className="nav-link link-visible-a mb-1"
                href="#Home"
                id="href-home"
                onClick={() => addColorStyle("link-home", "href-home")}
              >
                Home
              </a>
              <p className="lineNav  link-visible" id="link-home"></p>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link mb-1"
                href="#Services"
                id="href-services"
                onClick={() => addColorStyle("link-services", "href-services")}
              >
                Services
              </a>
              <p className="lineNav" id="link-services"></p>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link mb-1"
                href="#About"
                id="href-about"
                onClick={() => addColorStyle("link-about", "href-about")}
              >
                About
              </a>
              <p className="lineNav" id="link-about"></p>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link mb-1"
                href="#Projects"
                id="href-projects"
                onClick={() => addColorStyle("link-projects", "href-projects")}
              >
                Projects
              </a>
              <p className="lineNav" id="link-projects"></p>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link mb-1"
                href="#Contact"
                id="href-contact"
                onClick={() => addColorStyle("link-contact", "href-contact")}
              >
                Contact
              </a>
              <p className="lineNav" id="link-contact"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
