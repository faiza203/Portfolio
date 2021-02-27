import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        Faiza<span>Fiaz</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* <div>
          <img src="https://www.flaticon.com/svg/vstatic/svg/545/545705.svg?token=exp=1614396717~hmac=08f7f3dc8b4025fe0204d3d01ceba87c" />
          <p>Menu</p>
        </div> */}
    </div>
  );
};

export default Navbar;
