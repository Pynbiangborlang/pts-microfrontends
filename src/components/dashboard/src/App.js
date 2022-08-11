import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import css from "./components/dashboard/dashboard.styles.css";

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
