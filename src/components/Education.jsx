import React from "react";
import "./Education.css";

import adityaImage from "../assets/aditya.jpg";
import swarnImage from "../assets/swarn.png";
import zphsImage from "../assets/zphs.jpg";

const educationData = [
  {
  year: "2023 - 2026",
  institution: "Aditya Engineering College",
  degree: "B.Tech — Information Technology",
  description:
    "Completed B.Tech in Information Technology with a focus on software development, algorithms, web technologies, databases, and hands-on projects.",
  image: adityaImage,
  side: "left",
},
  {
    year: "2020 - 2023",
    institution: "Swarnandhra College of Engineering & Technology",
    degree: "Diploma — Computer Engineering (CME)",
    description:
      "Studied computer engineering fundamentals including programming, databases, web development, and software development through academic and practical projects.",
    image: swarnImage,
    side: "right",
  },
  {
    year: "2019 - 2020",
    institution: "ZPHS",
    degree: "Secondary Education",
    description:
      "Completed secondary education and developed a strong academic foundation for further studies in computer engineering and information technology.",
    image: zphsImage,
    side: "left",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="education-header">
          <span className="education-label">
            MY JOURNEY
          </span>

          <h2>Education</h2>

          <p>
  My academic journey and the foundation that shaped my skills
  in software development, web technologies, and data analysis.
</p>
        </div>

        <div className="education-timeline">

          {educationData.map((item, index) => (
            <div
              className={`education-item ${item.side}`}
              key={index}
            >

              <div className="education-node">
                <img
                  src={item.image}
                  alt={`${item.institution} logo`}
                />
              </div>

              <div className="education-content">

                <span className="education-year">
                  {item.year}
                </span>

                <h3>
                  {item.institution}
                </h3>

                <h4>
                  {item.degree}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;