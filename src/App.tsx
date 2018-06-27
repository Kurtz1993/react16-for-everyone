import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

import MoviesList from "@app/components/MoviesList";

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
        <Route path="/movie/:id" component={Test} />
      </Switch>
    </div>
  </Router>
);

const Test = ({ match }: any) => <h1>{match.params.id}</h1>;

export default App;
