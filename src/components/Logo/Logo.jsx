import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="home_logo">
      <h1 className="logo_h1">
        <Link to="/home">
          <span className="logo_mainLine">the</span>

          <span className="logo_mainLine listID">LIST.</span>
        </Link>
        {/* </span> */}
      </h1>
    </div>
  );
};

export default Logo;
