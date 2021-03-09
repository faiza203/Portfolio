import React from "react";
import Staff from "./Staff";
import "./css/about.css";

const About = () => {
  return (
    <div className="aboutPage" id="About">
      <div className="aboutMe d-inline-flex">
        <div className="developerImage ms-5 mt-2"></div>
        <div className="text-muted mt-5 mb-3">
          <h4 className="h4 mt-5 text-muted experience">
            I have great experience in {" "}
            <span className="parrot">
              HTML , CSS , JS , Node JS , Express JS, React , React Native ,
              TypeScript , GatsBy , Linux , Docker and Kubernetes
            </span>
          </h4>
        </div>
      </div>
      <Staff />
    </div>
  );
};

export default About;
