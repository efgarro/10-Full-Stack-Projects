import React from "react";
import { NavLink } from "react-router-dom";
// import "../css/header.css";
// import "../css/navbar.css";

export const HeaderOne = () => {
  return (
    <header className="header l-flexRow">
      <p>HeaderOne</p>
      <nav className="main-nav">
        <ul className="navbar--menu">
          <li>
            <NavLink to="/home">Mountain</NavLink>
          </li>
          <li>
            <NavLink to="/guanacaste">Beaches</NavLink>
          </li>
          <li>
            <NavLink to="/bird">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderOne;
