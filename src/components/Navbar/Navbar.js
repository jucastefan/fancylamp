import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import ToggleButton from "../ToggleButton/ToggleButton";

const Navbar = ({ switchButtonHandler, switchButton, checkedSwitchButton }) => {
  return (
    <nav className="navbar-container">
      <a href="#" className="navbar-logo">
        <img src={logo} alt="FancyLamp" />
      </a>
      <div className="navbar-menu">
        <ul className="navbar-list">
          <li>
            <a href="#signup">Affordable</a>
          </li>
          <li>
            <a href="#signup">Modern</a>
          </li>
          <li>
            <a href="#login">Pricing</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <ToggleButton
              switchButtonHandler={switchButtonHandler}
              switchButton={switchButton}
              checkedSwitchButton={checkedSwitchButton}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
