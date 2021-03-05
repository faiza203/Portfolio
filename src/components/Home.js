import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <div id="Home" className="d-inline-flex">
      <div className="d-inline-flex welcome">
        <p className="rotateP">Welcome</p>
        <div>
          <p>Welcome</p>
          <h1>Small Details</h1>
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
