import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import logo from "./logo.png";

export const Navbar = () => {
  return (
    <header className={classes.header}>
      {/* <!-- LOGO --> */}
      <div className={classes.logo}>
        <Link to="/" className={classes["logo-link"]}>
          <img
            src={logo}
            alt="Town Panchayath Virajpet Logo"
            className={classes["logo-img"]}
          />
          tp virajpet
        </Link>
      </div>
      <nav className={classes["main-nav"]}>
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-list__item"]}>
            <Link className="nav-link" to="/">
              DCB
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className="nav-link" to="/">
              Work Schemes
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className="nav-link" to="/">
              SCSP-TSP
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className="nav-link" to="/">
              Housing
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className="nav-link" to="/">
              Miscellaneous
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes["nav-toggle"]}>
        <div className={classes["hamburger"]}></div>
      </div>
    </header>
  );
};
