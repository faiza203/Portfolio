import React from "react";
import { FaBeer } from "react-icons/fa";
import "./css/services.css";

const Services = () => {
  return (
    <div className="services">
      <ul className="titles">
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>Business Strategy</p>
        </li>
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>Research</p>
        </li>
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>Data Analysis</p>
        </li>
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>UI Design</p>
        </li>
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>UX Design</p>
        </li>
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>Technology</p>
        </li>
        <li className="title">
          <FaBeer className="titleIcon" />
          <p>Creative</p>
        </li>
      </ul>
      <div className="serviceDetail">
        <FaBeer className="titleIcon" />
        <h1>Business Strategy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          voluptate, quibusdam sunt iste dolores consequatur Inventore fugit
          error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto
          facilis officiis nobis sit quis molestias asperiores rem, blanditiis!
          Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam
          natus quaerat doloremque.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Services;
