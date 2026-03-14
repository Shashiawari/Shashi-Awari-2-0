import "./foot.css";
import React from "react";
import Link from "next/link";
import Copyright from "./Copyright";

const footerGroups = [
  {
    title: "The Good",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "The Boring",
    links: [
      { label: "Email", href: "mailto:shashiawaripreetham@gmail.com" },
      { label: "Call", href: "tel:+919704832432" },
      { label: "GitHub", href: "https://github.com/Shashiawari" },
    ],
  },
  {
    title: "The Cool",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/shashi__awari/" },
      { label: "GitHub", href: "https://github.com/Shashiawari" },
      { label: "Contact Me", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="foot mt-5">
      <div className="footer-shell">
        <div className="footer-topbar">
          <div className="footer-badge" aria-hidden="true">
            SA
          </div>

          <div className="footer-groups">
            {footerGroups.map((group) => (
              <div key={group.title} className="footer-group">
                <p className="footer-group-title">{group.title}</p>

                <div className="footer-group-links">
                  {group.links.map((link) => (
                    <Link
                      key={`${group.title}-${link.label}`}
                      className="footer-group-link"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-brand-wrap">
          <p className="footer-brand-label">FULL-STACK DEVELOPER | AI & MACHINE LEARNING</p>
          <h1 className="footer-big-brand">Shashi Preetham Awari</h1>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
