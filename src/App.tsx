import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

import MoviesList from "@app/components/MoviesList";
import MovieDetail from "@app/components/MovieDetail";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
