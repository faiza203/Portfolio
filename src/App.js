import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
