import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <h1>Marblesea</h1>
      <h2>book's catalog - django & reactjs</h2>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse justify-content-center"
          id="navCollapse"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="!">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="!">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="!">
                Library
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
