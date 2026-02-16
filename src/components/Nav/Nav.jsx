import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Nav.css";

const Nav = ({ onNavigate }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isSinglePage = typeof onNavigate === "function";

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileNavOpen]);

  const handleNavClick = (item) => {
    if (isSinglePage && item.sectionId) {
      onNavigate(item.sectionId);
      setMobileNavOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-wrapper">
          {isSinglePage ? (
            <a
              href="#home"
              className="header-logo-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
                setMobileNavOpen(false);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL || ""}/chakravyuha-logo.png`}
                alt="CHAKRAVYUHA 26"
                className="header-logo"
              />
            </a>
          ) : (
            <Link to="/" className="header-logo-link" onClick={() => setMobileNavOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL || ""}/chakravyuha-logo.png`}
                alt="CHAKRAVYUHA 26"
                className="header-logo"
              />
            </Link>
          )}
        </div>

        <nav className={`nav-menu-container ${mobileNavOpen ? "is-open" : ""}`}>
          <div className="nav-links-wrapper">
            {SidebarData.map((item, index) => (
              <div 
                key={index} 
                className="nav-item-animated" 
                style={{ transitionDelay: mobileNavOpen ? `${index * 60}ms` : '0ms' }}
              >
                {isSinglePage ? (
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className={`nav-mobile-toggle ${mobileNavOpen ? "open" : ""}`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>

      {mobileNavOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1040 }} 
          onClick={() => setMobileNavOpen(false)}
        />
      )}
    </header>
  );
};

export default Nav;