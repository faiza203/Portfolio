import React from "react";
import servicesDetail from "./ServicesDetail";
import "./css/services.css";

const Services = () => {
  let Title = "Business Strategy";
  const titleIDS = [
    "Business Strategy",
    "Research",
    "Data Base",
    "UI Design",
    "Cloud Computing",
    "Technology",
    "Creative",
  ];
  const addTitle = (title, icon) => {
    document.getElementById(title).classList.add("visible-after");
    titleIDS.forEach(function (titleID, key) {
      if (titleID !== title) {
        document.getElementById(titleID).classList.remove("visible-after");
      } else {
        document.getElementById(title).classList.add("visible-after");
        document.getElementById("detailIcon").innerText = icon;
        document.getElementById("detailHeading").innerText = title;
        document.getElementById("detailp1").innerText = servicesDetail[key][0];
        document.getElementById("detailp2").innerText = servicesDetail[key][1];
      }
    });
    Title = title;
  };

  return (
    <div className="services" id="Services">
      <ul className="titles">
        <li
          className="title visible-after"
          id="Business Strategy"
          onClick={() => addTitle("Business Strategy", "lightbulb")}
        >
          <span className="material-icons-outlined">lightbulb</span>
          <p>Business Strategy</p>
        </li>
        <li
          className="title"
          id="Research"
          onClick={() => addTitle("Research", "science")}
        >
          <span className="material-icons-outlined">science</span>
          <p>Research</p>
        </li>
        <li
          className="title"
          id="Data Base"
          onClick={() => addTitle("Data Base", "biotech")}
        >
          <span className="material-icons-outlined">biotech</span>
          <p>Data Base</p>
        </li>
        <li
          className="title"
          id="UI Design"
          onClick={() => addTitle("UI Design", "web")}
        >
          <span className="material-icons-outlined">web</span>
          <p>UI Design</p>
        </li>
        <li
          className="title"
          id="Cloud Computing"
          onClick={() => addTitle("Cloud Computing", "computer")}
        >
          <span className="material-icons-outlined">computer</span>

          <p>Cloud Computing</p>
        </li>
        <li
          className="title"
          id="Technology"
          onClick={() => addTitle("Technology", "psychology")}
        >
          <span className="material-icons-outlined">psychology</span>
          <p>Technology</p>
        </li>
        <li
          className="title"
          id="Creative"
          onClick={() => addTitle("Creative", "emoji_objects")}
        >
          <span className="material-icons-outlined">emoji_objects</span>
          <p>Creative</p>
        </li>
      </ul>
      <div className="serviceDetail mb-5">
        <span
          className="material-icons-outlined detailIcon ms-5"
          id="detailIcon"
        >
          lightbulb
        </span>
        <h2 className="detailHeading" id="detailHeading">
          {Title}
        </h2>
        <p className="detailp" id="detailp1">
          Our business strategy is to keep Pakistan afloat{" "}
        </p>
        <p className="detailp mt-3" id="detailp2">
          Pakistan is our home and when Pakistan develops we have achieved great
          success.We are committed to hard work{" "}
        </p>
        <button className="btn learnMore rounded-pill mt-3 mb-5">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Services;
