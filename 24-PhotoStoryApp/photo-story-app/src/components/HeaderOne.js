import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import logo from "../img/logo.jpg";

export const HeaderOne = () => {
  return (
    <header className="header-wrapper layout-flexCol">
      <div className="layout-flexRow header-wrapper--row">
        <Link to={"/"}>
          <img src={logo} className="header--logo" />
        </Link>
        <SearchForm />
      </div>
      <div className="header--navbar">
        <nav className="header-wrapper--row">
          <ul className=" layout-flexRow navbar--menu">
            <li>
              <NavLink to="/nicoyastacruz">Nicoya / Santa Cruz</NavLink>
            </li>
            <li>
              <NavLink to="/jacoherradura">Jacó / Herradura</NavLink>
            </li>
            <li>
              <NavLink to="/monteverde">Monteverde</NavLink>
            </li>
            <li>
              <NavLink to="/lafortuna">La Fortuna</NavLink>
            </li>
            <li>
              <NavLink to="/cahuitaptoviejo">Cahuita / Puerto Viejo</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderOne;
