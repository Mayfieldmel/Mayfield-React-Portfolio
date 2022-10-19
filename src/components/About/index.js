import React from "react";

function About() {
  // jsx
  return (
    <section className="about-section">
      <img
        className="portrait"
        src={require("../../assets/images/MeJadeWedding-cropped.jpg").default}
        alt="Melissa Mayfield and her winning smile"
      />
      <div className="flex-column">
        <h2>About Me</h2>
        <p className="about">
          Hi, my name is Melissa and I love to code! From responsive front-end
          web designs to more complex back-end software engineering, if you are
          looking for someone to create top-of-the-line user experiences then I
          am your gal! While I may be new to coding, I am not new to people. I
          have spent 7 years studying people, earning degrees in Psychology,
          Sociology, and Law. I have the customer service experience and the
          know-how to curate online experiences that users will love.
        </p>
        <p className="about">
          As a web developer leveraging a background in psychology, sociology,
          and the law, I can provide a unique perspective on software
          development and UI/UX. I am a hard worker with a natural talent for
          problem solving, and a passion for coding and project development. My
          strengths include creativity, teamwork, and problem-solving.
        </p>
      </div>
    </section>
  );
}

export default About;
