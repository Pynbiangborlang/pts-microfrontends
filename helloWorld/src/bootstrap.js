// helloReact/src/bootstrap.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

const DefaultApp = ({ history }) => {
  const [state, setState] = useState({
    location: history.location,
    action: history,
  });

  return (
    <App history={state} setHistory={(history) => setState({ ...history })} />
  );
};

const mount = (el) => {
  const history = createMemoryHistory();
  console.log(history);

  ReactDOM.render(<DefaultApp history={history} />, el);

  return {
    onParentNavigate({ location }) {
      const pathname = history.location.pathname;
      if (pathname !== location.pathname) {
        history.push(location.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#hello-react-dev-app");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
