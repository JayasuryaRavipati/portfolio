import React from "react";
import "./Work.css";

import smartMapImage from "../assets/smartmap.png";
import requestHubImage from "../assets/requesthub.png";

const projects = [
  {
    image: smartMapImage,
    tags: ["MERN", "React", "Google Maps API"],
    title: "SMARTMAP — Smart Delivery Route Optimization",
    description:
      "A full-stack delivery management and route optimization platform with interactive maps, delivery tracking, driver management, and optimized route planning.",
    featured: true,
    demo: "https://smartmap-frontend.onrender.com/",
  },

  {
    image: requestHubImage,
    tags: ["React Native", "Node.js", "MongoDB"],
    title: "RequestHub — Service Request Platform",
    description:
      "A full-stack mobile service platform that allows users to create, manage, and track service requests with a smooth and responsive user experience.",
    featured: false,
    demo: "https://request-hub-52.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container">

        {/* Heading */}
        <div className="work-header">
          <div>
            <p className="work-label">PORTFOLIO</p>
            <h2>Selected work</h2>
          </div>

          <button className="all-projects">
            All projects <span>→</span>
          </button>
        </div>

        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={index}
            >

              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* Project Information */}
              <div className="project-content">

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      className={`project-tag ${
                        tagIndex === 0 ? "orange-tag" : ""
                      }`}
                      key={tagIndex}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3>{project.title}</h3>

                {/* Description */}
                <p>{project.description}</p>

                {/* Live Demo */}
                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study"
                  onClick={(e) => {
                    if (!project.demo) {
                      e.preventDefault();
                    }
                  }}
                >
                  Live demo <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Work;