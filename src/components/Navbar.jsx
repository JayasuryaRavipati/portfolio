import React from "react";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>SU</span>
          <span className="logo-orange">RYA</span>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("work")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
  Skills
</button>

          <button onClick={() => scrollToSection("education")}>
  Education
</button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        {/* Right buttons */}
        <div className="navbar-actions">

          <button
  className="theme-toggle"
  onClick={toggleTheme}
  aria-label="Toggle theme"
>
  {darkMode ? (
    /* Sun */
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />

      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ) : (
    /* Moon */
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3
        7 7 0 0 0 21 12.79Z"
      />
    </svg>
  )}
</button>

          <button
            className="hire-button"
            onClick={() => scrollToSection("contact")}
          >
            Hire me
            <span>→</span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;