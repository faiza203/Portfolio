import React from "react";
import "./css/projects.css";

let imgClasses = ["chat-app", "todo-app", "weather-app", "weather-app-2"];
function setImages(imgApp) {
  imgClasses.forEach((imgClass) => {
    imgClass !== imgApp
      ? document
          .getElementById(imgClass)
          .classList.add("projectBackgroundImageActive")
      : document
          .getElementById(imgApp)
          .classList.remove("projectBackgroundImageActive");
    imgClass !== imgApp
      ? document
          .getElementById(imgClass)
          .classList.remove("projectBackgroundImage")
      : document.getElementById(imgApp).classList.add("projectBackgroundImage");
    imgClass !== imgApp
      ? document
          .getElementById(imgClass+"-btn")
          .classList.remove("active")
      : document.getElementById(imgApp+"-btn").classList.add("active");
  });
}

const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="h1 text-muted mt-5 mb-5 text-uppercase">Our Projects</h1>
      <div
        className="d-flex projectImages mt-5 justify-content-center mb-5"
        id="projectImages"
      >
        {" "}
        <div className="projectBackgroundImageActive chat-app" id="chat-app">
          <h1>Chat App</h1>
        </div>
        <div
          className="projectBackgroundImageActive weather-app"
          id="weather-app"
        >
          <h1>Weather App</h1>
        </div>
        <div className="projectBackgroundImageActive todo-app " id="todo-app">
          <h1>Todo App</h1>
        </div>
        <div
          className=" projectBackgroundImage weather-app-2"
          id="weather-app-2"
        >
          <h1>Weather App 2</h1>
        </div>
      </div>
      <div className="dots d-inline-flex justify-content-center mt-5">
        <button
          className="btn me-2 "
          id="todo-app-btn"
          onClick={() => setImages("todo-app")}
        ></button>
        <button
          id="chat-app-btn"
          className="btn me-2"
          onClick={() => setImages("chat-app")}
        ></button>
        <button
          id="weather-app-2-btn"
          className="btn me-2"
          onClick={() => setImages("weather-app-2")}
        ></button>
        <button
          id="weather-app-btn"
          className="btn me-2"
          onClick={() => setImages("weather-app")}
        ></button>
      </div>
    </div>
  );
};

export default Projects;
