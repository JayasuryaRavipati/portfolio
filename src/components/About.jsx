import React from "react";
import "./About.css";

import profileImage from "../assets/profile.png";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Power BI",
  "Git / GitHub",
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT - IMAGE */}
        <div className="about-image-wrapper">
          <img
            src={profileImage}
            alt="Jayasurya"
            className="about-image"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="about-content">

          <p className="about-label">
            ABOUT ME
          </p>

          <h2>
            A bit about
            <br />
            who I am
          </h2>

          <p className="about-text">
            I'm Jayasurya, a Full Stack Developer and Data Analyst
            who enjoys building modern web applications and turning
            data into meaningful insights. I work with technologies
            like React, JavaScript, Node.js, MongoDB, Python, and SQL
            to create practical and user-focused digital solutions.
          </p>

          <p className="about-text">
            I enjoy solving real-world problems through clean code,
            thoughtful interfaces, and data-driven thinking. My goal
            is to build applications that are fast, responsive, easy
            to use, and backed by meaningful insights from data.
          </p>

          {/* STACK */}
          <div className="stack-section">

            <p className="stack-label">
              STACK &amp; TOOLS
            </p>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <span
                  className="skill-pill"
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;