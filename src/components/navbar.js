import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-brand text-uppercase">
        Faiza<span>Fiaz</span>
      </div>
      <ul className="navbar-links d-inline-flex list-unstyled">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
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
