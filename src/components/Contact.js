import React from "react";
import "./css/contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="d-inline-flex">
        <div id="contactSite">
          <span className="material-icons-outlined contactIcon">facebook</span>
          <h1>FaceBook ID</h1>
          <p>Faiza Fiaz 315</p>
        </div>
        <div id="contactSite">
          <span className="material-icons-outlined contactIcon">email</span>
          <h1>Email</h1>
          <p>fiazfaiza981@gmail.com</p>
        </div>
        <div id="contactSite">
          <span className="material-icons-outlined contactIcon">home</span>
          <h1>ADDRESS</h1>
          <p>Faiza</p>
        </div>
        <div id="contactSite">
          <span className="material-icons-outlined contactIcon">phone</span>
          <h1>Contact No</h1>
          <p>Faiza</p>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
