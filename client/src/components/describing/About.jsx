import React from "react";
import PersonalDescription from './PersonalDescription.jsx';
import Projects from './Projects.jsx';

const About = (props) => {
  return (
    <div className="about-page">
      <PersonalDescription />
      <Projects />
    </div>
    );
};

export default About;
  