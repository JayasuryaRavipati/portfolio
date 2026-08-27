import React from "react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "React Native",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Full Stack Engineering",
    skills: [
      "TypeScript",
      "Redux",
      "JWT Authentication",
      "API Integration",
      "Database Design",
      "Deployment",
      "Testing",
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      "Java",
      "C",
      "C++",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <p className="skills-label">
            MY EXPERTISE
          </p>

          <h2>
            Skills &amp; technologies
          </h2>

          <p className="skills-intro">
            Technologies and tools I use to build modern web
            applications, develop backend systems, connect services,
            and deliver reliable products from idea to deployment.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div
              className="skill-group"
              key={index}
            >

              <div className="skill-group-header">

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {group.title}
                </h3>

              </div>

              <div className="skills-list">

                {group.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-pill"
                    key={skillIndex}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;