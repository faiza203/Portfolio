import React from "react";
import Staff from "./Staff";

const About = () => {
  return (
    <div>
      <div className="aboutMe">
        <div className="developerImage"></div>
        <div>
          <h3>About Me</h3>
          <h1>HI! My name is Faiza Fiaz</h1>
          <p>
            I am 12<sup>th</sup> years old Pakistani Developer
          </p>
        </div>
      </div>
      <Staff />
    </div>
  );
};

export default About;
