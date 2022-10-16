import React, {useState} from "react";
import pawfect from "../../assets/images/pawfect-homepage.png";
import techBlog from "../../assets/images/mayfield-tech-blog-screenshot.png";
import textEditor from "../../assets/images/text-editor-demo.gif";
import weatherDash from "../../assets/images/weather-dash.png";
import noteTaker from "../../assets/images/Mayfield-Note-Taker-Demo.gif";
import dayPlanner from "../../assets/images/day-planner.gif";


function Portfolio() {
   
  const projects = [
    {
      src: pawfect,
      title: "Pawfect Friends",
      tools:
        "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
    },
    {
      src: techBlog,
      title: "Mayfield Tech Blog",
      tools:
        "HTML/Handlebars, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize",
    },
    {
      src: textEditor,
      title: "Mayfield Text Editor",
      tools:
        "Node.js, Express.js, Webpack, IndexedDB",
    },
    {
      src: weatherDash,
      title: "Weather Dash",
      tools:
        "HTML, CSS, JavaScript",
    },
    {
      src: noteTaker,
      title: "Mayfield Note Taker",
      tools:
        "Express.js, Node.js",
    },
    {
      src: dayPlanner,
      title: "Mayfield Day Planner",
      tools:
        "HTML, CSS, JQuery",
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
          {(hover && projectCard.title === project.title) ? (
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
          ) : (
            <img
            src={`${project.src}`}
            alt={`${project.title}`}
            className="image"
          >
          </img>
          )}
        </div>
      ))}
</div>
</section>
)
}

export default Portfolio;
