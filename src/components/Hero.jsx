import React from "react";
import "./Hero.css";

import profileImage from "../assets/profile.png";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">

      {/* Decorative orange glow */}
      <div className="hero-glow"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="availability">
            AVAILABLE FOR WORK
          </p>

          <h1>
            Hi, I'm{" "}
            <span>JAYASURYA</span>
          </h1>

          <p className="hero-description">
            I'm a{" "}
            <strong>Full Stack Developer</strong>{" "}
            who builds modern, responsive, and user-friendly
            web applications from database to deployment using
            React, JavaScript, Node.js, Express.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={scrollToWork}
            >
              <span>View my work</span>
              <span className="button-arrow">↗</span>
            </button>

            {/* Resume Button */}
            <a
              href="/Surya_Ravipati_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-custom-resume-btn"
              aria-label="View or Download Resume"
            >
              <span>Resume</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="resume-download-icon"
              >
                <line x1="12" y1="3" x2="12" y2="15" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="5" y1="20" x2="19" y2="20" />
              </svg>
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-container">

          <div className="image-wrapper">

            <img
              src={profileImage}
              alt="Jayasurya"
              className="profile-image"
            />

          </div>

          {/* Floating badge */}
          <div className="project-badge">
            Open to projects
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;