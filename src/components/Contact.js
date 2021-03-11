import React from "react";
import "./css/contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="mt-5">
      <h2 className="text-uppercase mt-3 fw-normal">Contact Us</h2>
      <div className="d-inline-flex mt-5 mb-5">
        <div id="contactSite" className="ms-4 me-4 rounded">
          <span className="material-icons-outlined contactIcon">home</span>
          <h5 className="fw-bold">ADDRESS</h5>
          <p id="contactData" className="mt-3 mb-3">
            Nafess Tailors Manawala Faisalabad Pakistan
          </p>
        </div>
        <div id="contactSite" className="ms-4 me-4 rounded">
          <span className="material-icons-outlined contactIcon">phone</span>
          <h5 className="fw-bold">CONTACT NUMBER</h5>
          <p id="contactData" className="mt-3 mb-3">
            + 0320 54555203
          </p>
        </div>
        <div id="contactSite" className="ms-4 me-4 rounded">
          <span className="material-icons-outlined contactIcon">email</span>
          <h5 className="fw-bold">EMAIL ADDRESS</h5>
          <p id="contactData" className="mt-3 mb-3">
            fiazfaiza981@gmail.com
          </p>
        </div>
        <div id="contactSite" className="ms-4 me-4 rounded">
          <span className="material-icons-outlined contactIcon">facebook</span>
          <h5 className="fw-bold">FACEBOOK ID</h5>
          <p id="contactData" className="mt-3 mb-3">
            Faiza.Fiaz.315
          </p>
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
