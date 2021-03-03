import React from "react";
import "./css/projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="h1 text-muted mt-5">Our Projects</h1>
      <div className="d-inline">
        <div className="backgroundImgDiv chat-app"></div>
        <div className="backgroundImgDiv todo-app "></div>
        <div className="backgroundImgDiv weather-app"></div>
        <div className="backgroundImgDiv weather-app-2"></div>
      </div>
      <div className="dots d-inline-flex justify-content-center">
        <p className="rounded ml-5 mr-5"></p>
        <p className="rounded ml-5 mr-5"></p>
        <p className="rounded ml-5 mr-5"></p>
        <p className="rounded ml-5 mr-5"></p>
      </div>
    </div>
  );
};

export default Projects;
