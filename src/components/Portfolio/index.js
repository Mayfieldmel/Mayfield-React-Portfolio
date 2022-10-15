import React from "react";
import Pawfect from "../../assets/images/pawfect-homepage.png";

const projects = [
  {
    src: Pawfect,
    title: "Pawfect Friends",
    tools:
      "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
  },
  {
    src: Pawfect,
    title: "Pawfect Friends",
    tools:
      "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
  },
  {
    src: Pawfect,
    title: "Pawfect Friends",
    tools:
      "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
  },
  {
    src: Pawfect,
    title: "Pawfect Friends",
    tools:
      "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
  },
  {
    src: Pawfect,
    title: "Pawfect Friends",
    tools:
      "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
  },
  {
    src: Pawfect,
    title: "Pawfect Friends",
    tools:
      "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
  },
];

function Portfolio() {
  // jsx
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-section">
        {projects.map((project) => (
          <div key={project.title}>
            <img
              src={`${project.src}`}
              alt="Pawfect Friends Homepage"
              className="image"
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
