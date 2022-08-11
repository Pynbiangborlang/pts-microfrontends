// container/src/App.js
import React from "react";
import HelloWorld from "./components/HelloWorldApp";
import Dashboard from "./components/Dashboard";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import css from "./App.css";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <Link to="/dashboard" className="pts-dashboard-sidebar-link">
      Dashboard
    </Link>
    <br />
    <Link to="/react" className="pts-dashboard-sidebar-link">
      use react
    </Link>
    <br />
    <Link to="/" className="pts-dashboard-sidebar-link">
      hello world
    </Link>
  </div>
);
export default () => {
  return (
    <Router history={history}>
      <div className="pts-main-container">
        <div className="pts-sidebar">
          <Header />
        </div>
        <div className="pts-dashboard-content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={HelloWorld} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
