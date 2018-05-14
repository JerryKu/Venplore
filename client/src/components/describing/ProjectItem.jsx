import React from 'react';

const ProjectItem = ({ image, title, position, description, github}) => {
  return <div className="project box-shadow-container">
      <img className="project-image" src={image} />
      <div className="primary-title-blue">{title}</div>
      <div className="secondary-title-green" >{position}</div>
      <p>{description}</p>
      <a className="code-link" href={github} target="_blank">
        Link to Code
      </a>
    </div>;
}

export default ProjectItem;