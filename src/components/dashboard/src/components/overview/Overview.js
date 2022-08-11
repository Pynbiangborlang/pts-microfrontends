import React, { useRef, useState } from "react";
import { HelpOutlineRounded } from "@mui/icons-material";
import "./dashboard.styles.css";
import { Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";

const Overview = () => {
  const history = createBrowserHistory();
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [currentTab, setCurrentTab] = useState("Overview");
  const [tab, setTab] = useState("Overview");
  const ref = useRef(null);
  return <div>Overview</div>;
};

export default Overview;
