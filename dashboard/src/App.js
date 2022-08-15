import React, { useRef, useState } from "react";
import { Routes, Route, Link, NavLink, Router } from "react-router-dom";
import Overview from "./components/overview/Overview";
import css from "./App.css";
import { HelpOutlineRounded } from "@mui/icons-material";
import newhistory from "history/browser";

const App = ({ history, setHistory }) => {
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [currentTab, setCurrentTab] = useState("Overview");
  const ref = useRef(null);

  let unlisten = newhistory.listen(({ action, location }) => {
    console.log(location);
    console.count("i am listening in dashboard");
    setHistory({ action: action, location: { ...location } });
  });

  return (
    <Router
      basename=""
      location={history.location}
      navigationType={history.action}
      navigator={newhistory}
    >
      <div className="pts-dashboard">
        <div>
          {["Overview", "More"].map((tab, i) => (
            <NavLink
              ref={ref}
              key={i}
              className={(isActive) =>
                isActive &&
                currentTab.toLocaleLowerCase() === tab.toLocaleLowerCase()
                  ? "pts-nav-links active"
                  : "pts-nav-links"
              }
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
          <Link to="/dashboard/overview" className="pts-dashboard-link">
            <i> Dashboard /</i>
          </Link>
          <span className="pts-dashboard-tab"> {currentTab}</span>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/dashboard">
          <Route path="overview" element={<Overview />} />
          <Route path="more" element={<div>More</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
