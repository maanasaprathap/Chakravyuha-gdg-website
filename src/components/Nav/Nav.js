import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Nav.css";

const Nav = ({ onNavigate }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isSinglePage = typeof onNavigate === "function";

  const handleNavClick = (item) => {
    if (isSinglePage && item.sectionId) {
      onNavigate(item.sectionId);
      setMobileNavOpen(false);
    }
  };

  return (
    <header className="site-header">
      {isSinglePage ? (
        <a
          href="#home"
          className="header-logo-link"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          aria-label="Chakravyuha 26 Home"
        >
          <img
            src={`${process.env.PUBLIC_URL || ""}/chakravyuha-logo.png`}
            alt="CHAKRAVYUHA 26"
            className="header-logo"
          />
        </a>
      ) : (
        <Link to="/" className="header-logo-link" aria-label="Chakravyuha 26 Home">
          <img
            src={`${process.env.PUBLIC_URL || ""}/chakravyuha-logo.png`}
            alt="CHAKRAVYUHA 26"
            className="header-logo"
          />
        </Link>
      )}

      <button
        type="button"
        className="nav-mobile-toggle"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileNavOpen}
      >
        {mobileNavOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav-pill ${mobileNavOpen ? "open" : ""}`} aria-label="Main navigation">
        {SidebarData.map((item, index) =>
          isSinglePage ? (
            <button
              key={index}
              type="button"
              className="nav-pill-link"
              onClick={() => handleNavClick(item)}
            >
              {item.title}
            </button>
          ) : (
            <Link
              key={index}
              to="/"
              className="nav-pill-link"
              onClick={() => setMobileNavOpen(false)}
            >
              {item.title}
            </Link>
          )
        )}
      </nav>
    </header>
  );
};

export default Nav;
