import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const TopNav: React.FC = () => {
  return (
    <div className="TopNav">
      <div className="TopLabel">Ski The East</div>
      <div className="TopRouter">
        <Link to={"/home"}>Home </Link>
        <Link to={"/trips"}>Trips </Link>
        <Link to={"/impact"}>Impact </Link>
      </div>
    </div>
  );
};

export default TopNav;