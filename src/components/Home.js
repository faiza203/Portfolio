import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <div id="Home">
      <div className="d-inline-flex welcome">
        <h4 className="rotateP text-uppercase fw-lighter welcomeH ">
          Welcome
        </h4>
        <div id="information">
          <h4 className="text-uppercase parrot fw-lighter welcomeH pt-1 pb-1">Welcome</h4>
          <h1>Small Details</h1>
        </div>
      </div>
      <img className="appImg"
        src="https://i.insider.com/5638c96cbd86ef16008c6c2f?width=1100&format=jpeg&auto=webp"
        alt="img"
      />
    </div>
  );
};

export default Home;
