import React from "react";
import "./Navbar.css";
import NavLink from "./list";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1698510114/Picture1_xekuhi.png"
              height={"50px"}
              alt="Brand"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink href={"/"}>home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href={"/about"}>about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href={"/projects"}>projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href={"/contact"}>contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
