import React from "react";
import Staff from "./Staff";
import "./css/about.css";
const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutMe">
        <div className="developerImage"></div>
        <div className="text-muted mt-3 mb-3">
          <h1 className="h1 mt-5">
            HI! My name is
            <span className="parrot"> Faiza Fiaz</span>
          </h1>
          <p className="h3 mt-3">
            I am 12<sup className="parrot">th</sup> years old Developer from{" "}
            <br />
            <span className="parrot">Pakistan </span>
          </p>
        </div>
      </div>
      <Staff />
    </div>
  );
};

export default About;
