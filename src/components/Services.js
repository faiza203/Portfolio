import React from "react";
import "./css/services.css";

const Services = () => {
  return (
    <div className="services">
      <ul className="titles">
        <li>Business Strategy</li>
        <li>Research</li>
        <li>Data Analysis</li>
        <li>UI Design</li>
        <li>UX Design</li>
        <li>Technology</li>
        <li>Creative</li>
      </ul>
      <div className="serviceDetail">
        <span class="icon mb-3 d-block flaticon-analysis"></span>
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
