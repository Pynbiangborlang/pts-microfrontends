import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createMemoryHistory } from "history";
import { useState } from "react";

const RenderApp = ({ history }) => {
  const [state, setState] = useState({
    location: history.location,
    action: history.action,
  });

  return (
    <App history={state} setHistory={(history) => setState({ ...history })} />
  );
};

const mount = (el) => {
  const history = createMemoryHistory();
  const root = createRoot(el);
  root.render(<RenderApp history={history} />);

  return function onParentNavigate({ location }) {
    let pathname = history.location.pathname;
    if (pathname !== location.pathname) {
      history.push(location.pathname);
    }
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#pts-dashboard");
  if (devRoot) {
    mount(devRoot);
  }
}
export { mount };
