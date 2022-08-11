import React, { useEffect, useRef } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { mount } from "dashboard/Dashboard";

const helloWorld = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div>
      Hello World App
      <div ref={ref} />
    </div>
  );
};
const helloReact = () => <div>Hello React!</div>;

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/react" component={helloReact} />
          <Route path="/" component={helloWorld} />
        </Switch>
      </Router>
    </div>
  );
};
