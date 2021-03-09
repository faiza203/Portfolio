import React from "react";
import "./css/projects.css";

const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="h1 text-muted mt-5 mb-5">Our Projects</h1>
      <div className="d-flex projectImages  justify-content-center">
        <div className="projectBackgroundImage chat-app"></div>
        <div className="projectBackgroundImage todo-app "></div>
        <div className="projectBackgroundImage weather-app"></div>
      </div>
      <div className="dots d-inline-flex justify-content-center mt-5">
        <p className="rounded  me-1"></p>
        <p className="rounded  me-1"></p>
        <p className="rounded  me-1"></p>
        <p className="rounded  me-1"></p>
      </div>
    </div>
  );
};

export default Projects;
