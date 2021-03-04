import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocumentPage from "./components/App";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
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
