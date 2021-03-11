import React from "react";
import "./css/projects.css";

let imgClass = ["chat-app", "todo-app", "weather-app"];
function setImages(imgApp) {
  if (imgApp === "chat-app") {
    return (imgClass = ["todo-app", "weather-app", "weather-app-2"]);
  } else if (imgApp === "todo-app") {
    return (imgClass = ["chat-app", "weather-app", "weather-app-2"]);
  } else if (imgApp === "weather-app") {
    return (imgClass = ["chat-app", "todo-app", "weather-app-2"]);
  } else if (imgApp === "weather-app-2") {
    return (imgClass = ["chat-app", "todo-app", "weather-app"]);
  } else {
    return (imgClass = ["chat-app", "todo-app", "weather-app-2"]);
  }
}

const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="h1 text-muted mt-5 mb-5">Our Projects</h1>
      <div
        className="d-flex projectImages  justify-content-center"
        id="projectImages"
      >
        {imgClass.map((img, index) => {
          return (
            <div key={index} className={` projectBackgroundImage ${img}`}></div>
          );
        })}
      </div>
      <div className="dots d-inline-flex justify-content-center mt-5">
        <p className="me-2" onClick={() => setImages("chat-app")}></p>
        <p className="me-2" onClick={() => setImages("todo-app")}></p>
        <p className="me-2" onClick={() => setImages("weather-app-2")}></p>
        <p className="me-2" onClick={() => setImages("weather-app")}></p>
      </div>
    </div>
  );
};

export default Projects;
