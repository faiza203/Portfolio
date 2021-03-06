import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <div id="Home" className="d-inline-flex">
      <div className="d-inline-flex welcome">
        <h3 className="rotateP text-muted text-uppercase fw-lighter ">
          Welcome
        </h3>
        <div id="information">
          <h3 className="text-uppercase parrot fw-lighter">Welcome</h3>
          <h1>Small Details</h1>
          <h2>More Details</h2>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <img
        src="https://i.insider.com/5638c96cbd86ef16008c6c2f?width=1100&format=jpeg&auto=webp"
        alt="img"
      />
    </div>
  );
};

export default Home;
