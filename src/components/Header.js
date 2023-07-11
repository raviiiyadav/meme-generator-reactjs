import React from "react";
import logo from "../Image/logo1.png";
import "./MemeGenerator.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <h3>MemeGenerator</h3>
    </header>
  );
};

export default Header;
