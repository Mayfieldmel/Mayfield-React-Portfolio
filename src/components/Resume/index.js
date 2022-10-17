import React from "react";
import resume from "../../assets/Mayfield IT Resume 2022.docx";

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        To download my resume, click
        <a href={`${resume}`}>here</a>
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>BootStrap, Materialize, Bulma</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </section>
  );
}

export default Resume;
