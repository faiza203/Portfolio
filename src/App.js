import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocumentPage from "./components/App";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.backgroundColor = "white";
    } else {
      document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <DocumentPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
