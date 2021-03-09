import React from "react";
import Staff from "./Staff";
import "./css/about.css";

const About = () => {
  return (
    <div className="aboutPage" id="About">
      <div className="aboutMe d-inline-flex">
        <div className="developerImage ms-5 mt-2"></div>
        <div className="text-muted mt-3 mb-3">
          <h3 className="h3 mt-5">
            I have great experience in
            <br />
            <span className="parrot">
              HTML , CSS , JS , Node JS , Express JS,
              <br />
              React , React Native , TypeScript ,
              <br /> GatsBy , Linux , Docker and Kubernetes
            </span>
          </h3>
        </div>
      </div>
      <Staff />
    </div>
  );
};

export default About;
