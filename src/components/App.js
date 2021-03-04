import React from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const DocumentPage = () => {
  return (
    <div>
        <Home />
      <Services />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default DocumentPage;
