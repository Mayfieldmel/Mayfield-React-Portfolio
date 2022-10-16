import React, {useState} from "react";
import Pawfect from "../../assets/images/pawfect-homepage.png";


function Portfolio() {
   
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

  const [projectCard, setProjectCard] = useState(projects[0])
  const [projectDetails, setProjectDetails] = useState(false)
  const [hover, setHover] = useState(false)

//jsx
return (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-section">
    {projects.map((project) => (
        <div key={project.title} className="container" onMouseEnter={() => {setHover(true); setProjectCard(project); setProjectDetails(true)}}
        onMouseLeave={() => {setHover(false); setProjectCard(project); setProjectDetails(false)}}>
          {(!hover && projectCard.title === project.title)  ? (
          <img
            src={`${project.src}`}
            alt="Pawfect Friends Homepage"
            className="image"
          >
          </img>
          ) : (
            <>
            <img
            src={`${project.src}`}
            alt="Pawfect Friends Homepage"
            className="img"
          >
          </img>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p className="tools">{project.tools}</p>
          </div>
          </>
          )}
        </div>
      ))}
</div>
</section>
)
}

export default Portfolio;
