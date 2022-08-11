import React, { useRef, useState } from "react";
import { Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Overview from "./components/overview/Overview";
import css from "./components/overview/dashboard.styles.css";
import { HelpOutlineRounded } from "@mui/icons-material";
import { useEffect } from "react";

const App = ({ history }) => {
  useEffect(() => {
    if (history.location.pathname === "/dashboard") {
      history.push("/dashboard/overview");
    }
  }, [history.location.pathname]);

  const [isHorizontal, setIsHorizontal] = useState(true);
  const [currentTab, setCurrentTab] = useState("Overview");
  const ref = useRef(null);
  return (
    <Router history={history}>
      <div className="pts-dashboard">
        <div>
          {["Overview", "More"].map((tab, i) => (
            <NavLink
              ref={ref}
              key={i}
              className="pts-nav-links"
              to={`/dashboard/${tab.toLocaleLowerCase()}`}
              onClick={() => {
                setCurrentTab(tab);
              }}
            >
              {tab}
            </NavLink>
          ))}
        </div>
        <div className="pts-dashboard-utils">
          <button
            className="pts-nav-button"
            onClick={() => setIsHorizontal(!isHorizontal)}
          >
            {isHorizontal ? "Horizontal" : "Grid"}
          </button>
          <a className="pts-help-icon">
            <HelpOutlineRounded />
          </a>
        </div>
      </div>
      <div className="pts-dashboard-content-box">
        <div>
          <Link to="/dashboard" className="pts-dashboard-link">
            <i> Dashboard /</i>
          </Link>
          <span className="pts-dashboard-tab"> {currentTab}</span>
        </div>
      </div>
      <Switch>
        <Route exact path="/dashboard" component={() => <div>dashboard</div>} />
        <Route exact path="/dashboard/overview" component={Overview} />
        <Route exact path="/dashboard/more" component={() => <div>More</div>} />
      </Switch>
    </Router>
  );
};

export default App;
