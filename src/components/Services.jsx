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
    title: "Frontend Development",
    description:
      "Modern, responsive and user-friendly interfaces using React, JavaScript, HTML and CSS. Focused on clean code, performance, accessibility and smooth user experiences.",
    featured: false,
  },
  {
    icon: "◔",
    title: "Data Analysis",
    description:
      "Transforming raw data into meaningful insights using Python, SQL, Pandas and data visualization. I analyze trends, identify patterns and create clear dashboards to support better decisions.",
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