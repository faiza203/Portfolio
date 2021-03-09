import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <div id="Home">
      <div className="d-inline-flex welcome">
        <h4 className="rotateP text-uppercase fw-lighter welcomeH ">Welcome</h4>
        <div id="information" className="text-start">
          <h4 className="text-uppercase parrot fw-lighter welcomeH pt-1">
            Welcome
          </h4>
          <div className="ms-3  detailWelcome">
            <h1 className="h1 name">
              My Name is
              <span className="parrot fw-bold"> Faiza Fiaz</span>
            </h1>
            <p className="text-muted mt-3">
              I am 12 years old
              <span className="parrot"> Pakistani </span>
              Developer . I read in 8 class
            </p>
            <a href="https://github.com/faiza203">
              <button className="btn learnMore pb-2 pl-5 pr-5 mt-5 rounded-pill">My GitHub</button>
            </a>
          </div>
        </div>
      </div>
      <img
        className="appImg"
        src="https://i.insider.com/5638c96cbd86ef16008c6c2f?width=1100&format=jpeg&auto=webp"
        alt="img"
      />
    </div>
  );
};

export default Home;
