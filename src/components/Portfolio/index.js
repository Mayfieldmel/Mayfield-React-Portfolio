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

//jsx
return (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-section">
    {projects.map((project) => (
        <div key={project.title}>
          <img
            src={`${project.src}`}
            alt="Pawfect Friends Homepage"
            className={`image ${projectCard.title === project.title && projectDetails && 'image-hover'}`}
            onMouseEnter={() => {setProjectCard(project); setProjectDetails(true)}}
            onMouseLeave={() => {setProjectCard(project); setProjectDetails(false)}}
          >
          </img>
        </div>
      ))}
    </div>
    
  <div className="portfolio-section">
    {projects.map((project) => (
        <div key={project.title} className="container">
          <img
            src={`${project.src}`}
            alt="Pawfect Friends Homepage"
            className="img"
            onMouseEnter={() => {setProjectCard(project); setProjectDetails(true)}}
            onMouseLeave={() => {setProjectCard(project); setProjectDetails(false)}}
          >
          </img>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p className="tools">{project.tools}</p>
          </div>
        </div>
      ))}
    </div>
</section>
)
}

export default Portfolio;
