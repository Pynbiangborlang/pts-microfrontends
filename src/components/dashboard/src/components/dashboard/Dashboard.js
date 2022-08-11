import React, { useRef, useState } from "react";
import { HelpOutlineRounded } from "@mui/icons-material";
import "./dashboard.styles.css";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const Dashboard = () => {
  const history = createBrowserHistory();
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [currentTab, setCurrentTab] = useState("Overview");
  return (
    <div>
      <div className="pts-dashboard">
        <div>
          {["Overview", "More"].map((tab, i) => (
            <a
              key={i}
              role={"button"}
              className="pts-nav-links"
              style={
                currentTab === tab
                  ? { backgroundColor: "#3fcbc8" }
                  : { backgroundColor: "none" }
              }
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab(tab);
                history.push(`/dashboard/${tab.toLocaleLowerCase()}`);
              }}
            >
              {tab}
            </a>
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
    </div>
  );
};

export default Dashboard;
