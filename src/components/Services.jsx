import React from "react";
import "./Services.css";

const services = [
  {
    icon: "</>",
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with React, Node.js, Express.js and MongoDB. From responsive frontends to secure REST APIs and scalable backend systems.",
    featured: true,
  },
  {
    icon: "◈",
    title: "Backend & API Development",
    description:
      "Secure REST APIs and backend services built with Node.js, Express.js, and MongoDB, including authentication, validation, business logic, and reliable data flows.",
    featured: false,
  },
  {
    icon: "◔",
    title: "Database & Integration",
    description:
      "Connecting frontend applications to databases and third-party services with maintainable architecture, reusable components, and production-ready integrations.",
    featured: false,
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section heading */}
        <div className="services-heading">
          <p className="section-label">WHAT I DO</p>
          <h2>Services</h2>
        </div>

        {/* Service cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${
                service.featured ? "featured" : ""
              }`}
              key={index}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;