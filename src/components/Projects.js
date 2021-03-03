import React from "react";
import "./css/projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="h1 text-muted mt-5">Our Projects</h1>
      <div className="d-flex projectImages  justify-content-center">
        <div className="projectBackgroundImage chat-app"></div>
        <div className="projectBackgroundImage todo-app "></div>
        <div className="projectBackgroundImage weather-app"></div>
        <div className="projectBackgroundImage weather-app-2"></div>
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
