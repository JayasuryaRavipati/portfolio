import React from "react";
import "./About.css";

import profileImage from "../assets/profile.png";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "REST APIs",
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
            I'm Jayasurya, a Full Stack Developer who enjoys building
            complete web applications from intuitive interfaces to
            reliable backend systems. I work with React, JavaScript,
            Node.js, Express.js, MongoDB, and TypeScript to create
            practical and user-focused products.
          </p>

          <p className="about-text">
            I enjoy solving real-world problems through clean code,
            well-designed APIs, secure data flows, and accessible
            interactions. My goal is to build applications that are
            reliable, scalable, and easy to use.
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