import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import logo from "../img/logo.jpg";

export const HeaderTwo = () => {
  return (
    <header className="header-wrapper layout-flexCol">
      <div className="layout-flexRow header-wrapper--row">
        <Link to={"/"}><img src={logo} className="header--logo" /></Link>
        <SearchForm />
      </div>
    </header>
  );
};

export default HeaderTwo;
