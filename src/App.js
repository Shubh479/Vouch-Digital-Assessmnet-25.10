import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NormalLoginForm from "./Components/Login";
import Success from "./Components/Success";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <NormalLoginForm />
          </Route>
          <Route path="/login__success" exact>
            <Success />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
