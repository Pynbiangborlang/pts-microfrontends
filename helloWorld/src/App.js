import React, { useEffect, useRef } from "react";
import { Routes, Route, Router, Navigate, Link } from "react-router-dom";
import newhistory from "history/browser";
import css from "./App.css";

const HelloWorld = () => {
  return <div>Hello World App</div>;
};
const HelloReact = () => <div>Hello React!</div>;

export default ({ history, setHistory }) => {
  let unlisten = newhistory.listen(({ action, location }) => {
    console.log(location);
    console.count("i am listening inside helloworld");
    setHistory({ action: action, location: { ...location } });
  });

  return (
    <div className="helloworld-container">
      <Router
        // basename="/"
        location={history.location}
        // navigationType={history.action}
        navigator={newhistory}
      >
        <div className="hw-header">
          <Link to="/helloworld">hello world</Link>
          &nbsp;
          <Link to="/helloreact">Hello React</Link>
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/helloworld" />} />
            <Route path="helloworld" element={<HelloWorld />} />
            <Route path="helloreact" element={<HelloReact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
