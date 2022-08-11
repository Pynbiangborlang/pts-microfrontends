import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ tabs, utils }) => {
  return (
    <>
      {tabs.map((tab) => (
        <Link to={tab.redirectTo}>{tab.name}</Link>
      ))}
      {utils.map}
    </>
  );
};

export default Navbar;
