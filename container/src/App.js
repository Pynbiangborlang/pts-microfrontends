// container/src/App.js
import React, { useEffect, useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Dashboard from "./components/Dashboard";
import { Route, Routes, Router, Link, Navigate } from "react-router-dom";
import history from "history/browser";
import styles from "./App.css";

const SideBar = () => (
  <div>
    <Link to="/dashboard/overview" className="pts-dashboard-sidebar-link">
      Dashboard
    </Link>
    <br></br>
    <Link to="/helloworld" className="pts-dashboard-sidebar-link">
      hello world
    </Link>
    <br />
  </div>
);

export default () => {
  const [state, setState] = useState({
    location: history.location,
    action: history.action,
  });

  let unlisten = history.listen(({ action, location }) => {
    setState({ action: action, location: { ...location } });
    if (history.location.pathname !== location.pathname) {
      history.push(location.pathname);
    }
  });

  return (
    <Router
      basename=""
      location={state.location}
      navigationType={history.action}
      navigator={history}
    >
      <div className="pts-main-container">
        <div className="pts-sidebar">
          <SideBar />
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/dashboard/overview" />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="helloworld" element={<HelloWorld />} />
            <Route path="helloreact" element={<HelloWorld />} />
            <Route path="*" element={<div>404 page not found</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
