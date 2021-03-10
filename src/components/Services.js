import React from "react";
import "./css/services.css";

const Services = () => {
  let Title = "Business Strategy";
  const titleIDS = [
    "Business Strategy",
    "Research",
    "Data Analysis",
    "UI Design",
    "UX Design",
    "Technology",
    "Creative",
  ];
  const addTitle = (title, icon) => {
    document.getElementById(title).classList.add("visible-after");
    titleIDS.forEach(function (titleID) {
      if (titleID !== title) {
        document.getElementById(titleID).classList.remove("visible-after");
      } else {
        document.getElementById(title).classList.add("visible-after");
        document.getElementById("detailIcon").innerText = icon;
        document.getElementById("detailHeading").innerText = title;
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
          <h6 className="arrow"></h6>
        </li>
        <li
          className="title"
          id="Research"
          onClick={() => addTitle("Research", "science")}
        >
          <span className="material-icons-outlined">science</span>
          <p>Research</p>
          <h6 className="arrow"></h6>
        </li>
        <li
          className="title"
          id="Data Analysis"
          onClick={() => addTitle("Data Analysis", "biotech")}
        >
          <span className="material-icons-outlined">biotech</span>
          <p>Data Analysis</p>
          <h6 className="arrow"></h6>
        </li>
        <li
          className="title"
          id="UI Design"
          onClick={() => addTitle("UI Design", "web")}
        >
          <span className="material-icons-outlined">web</span> <p>UI Design</p>
          <h6 className="arrow"></h6>
        </li>
        <li
          className="title"
          id="UX Design"
          onClick={() => addTitle("UX Design", "wysiwyg")}
        >
          <span className="material-icons-outlined">wysiwyg</span>
          <p>UX Design</p>
          <h6 className="arrow"></h6>
        </li>
        <li
          className="title"
          id="Technology"
          onClick={() => addTitle("Technology", "psychology")}
        >
          <span className="material-icons-outlined">psychology</span>
          <p>Technology</p>
          <h6 className="arrow"></h6>
        </li>
        <li
          className="title"
          id="Creative"
          onClick={() => addTitle("Creative", "emoji_objects")}
        >
          <span className="material-icons-outlined">emoji_objects</span>
          <p>Creative</p>
          <h6 className="arrow"></h6>
        </li>
      </ul>
      <div className="serviceDetail mb-5">
        <span className="material-icons-outlined detailIcon" id="detailIcon">
          lightbulb
        </span>
        <h2 className="detailHeading" id="detailHeading">
          {Title}
        </h2>
        <p className="detailp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          voluptate, quibusdam sunt iste dolores consequatur
        </p>
        <p className="detailp">
          Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam
          sequi quod iusto facilis officiis nobis sit quis molestias asperiores
          rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea,
          tempore et quam natus quaerat doloremque.
        </p>
        <button className="btn learnMore rounded-pill mt-3 mb-5">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Services;
