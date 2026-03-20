"use client";

import "./foot.css";
import React from "react";
import Link from "next/link";
import Copyright from "./Copyright";
import { useLanguage } from "@/components/lib/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerGroups = [
    {
      title: t("footer.theGood", "The Good"),
      links: [
        { label: t("footer.home", "Home"), href: "/" },
        { label: t("footer.about", "About"), href: "/about" },
        { label: t("footer.projects", "Projects"), href: "/projects" },
        { label: t("footer.contact", "Contact"), href: "/contact" },
      ],
    },
    {
      title: t("footer.theBoring", "The Boring"),
      links: [
        { label: t("footer.email", "Email"), href: "mailto:shashiawaripreetham@gmail.com" },
        { label: t("footer.call", "Call"), href: "tel:+919704832432" },
        { label: t("footer.github", "GitHub"), href: "https://github.com/Shashiawari" },
      ],
    },
    {
      title: t("footer.theCool", "The Cool"),
      links: [
        { label: t("footer.instagram", "Instagram"), href: "https://www.instagram.com/shashi__awari/" },
        { label: t("footer.github", "GitHub"), href: "https://github.com/Shashiawari" },
        { label: t("footer.contactMe", "Contact Me"), href: "/contact" },
      ],
    },
  ];

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
          <p className="footer-brand-label">{t("footer.brandLabel", "FULL-STACK DEVELOPER | AI & MACHINE LEARNING")}</p>
          <h1 className="footer-big-brand">Shashi Preetham Awari</h1>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
