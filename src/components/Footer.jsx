import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © 2026 Surya Ravipati. All rights reserved. Developed by{" "}
          <a
            href="https://lbegey78.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Surya Ravipati
          </a>{" "}
          • Distributed by{" "}
          <a
            href="https://themewagon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThemeWagon
          </a>
        </p>
        <p className="footer-credits">
          Built with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          &{" "}
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
