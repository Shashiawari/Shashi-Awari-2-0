import React from "react";
import Link from "next/link";
import "./Navbar.css";
import NavLink from "./list";

const navItems = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

const Navbar = () => {
  return (
    <>
      <header className="site-navbar-wrap">
        <nav className="navbar navbar-expand-md site-navbar">
          <div className="container-fluid site-navbar-shell">
            <Link className="navbar-brand site-navbar-brand" href="/">

              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1698510114/Picture1_xekuhi.png"
                alt="Shashi Awari"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              ></img>


            </Link>
            <button
              className="navbar-toggler site-navbar-toggle collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>
            <div className="collapse navbar-collapse site-navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto site-navbar-links">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.href}>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="navbar-spacer" aria-hidden="true"></div>
    </>
  );
};

export default Navbar;
