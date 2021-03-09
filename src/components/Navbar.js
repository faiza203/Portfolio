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
    <div className="navbar" id="navbar">
      <div className="navbar-brand text-uppercase">
        Faiza<span>Fiaz</span>
      </div>
      <ul className="navbar-links d-inline-flex list-unstyled">
        <li className="nav-item">
          <a
            className="nav-link link-visible-a"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
            href="#Contact"
            id="href-contact"
            onClick={() => addColorStyle("link-contact", "href-contact")}
          >
            Contact
          </a>
          <p className="lineNav" id="link-contact"></p>
        </li>
      </ul>
      {/* <div>
          <img src="https://www.flaticon.com/svg/vstatic/svg/545/545705.svg?token=exp=1614396717~hmac=08f7f3dc8b4025fe0204d3d01ceba87c" />
          <p>Menu</p>
        </div> */}
    </div>
  );
};

export default Navbar;