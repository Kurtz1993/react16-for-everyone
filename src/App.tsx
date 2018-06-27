import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

import MoviesList from "@app/components/MoviesList";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
      </Switch>
    </div>
  </Router>
);

export default App;
