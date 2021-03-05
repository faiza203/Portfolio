import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-brand text-uppercase">
        Faiza<span>Fiaz</span>
      </div>
      <ul className="navbar-links d-inline-flex list-unstyled">
        <li className="nav-item">
          <a  className="nav-link" href="#Home">Home<p className="lineNav"></p></a>
        </li>
        <li>
          <a  className="nav-link" href="#Services">Services<p className="lineNav"></p></a>
        </li>
        <li>
          <a  className="nav-link" href="#Projects">Projects<p className="lineNav"></p></a>
        </li>
        <li>
          <a  className="nav-link" href="#About">About<p className="lineNav"></p></a>
        </li>
        <li>
          <a  className="nav-link" href="#Contact">Contact<p className="lineNav"></p></a>
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
