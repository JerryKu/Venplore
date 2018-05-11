import React from 'react';

const ProjectItem = ({ image, title, position, description, github}) => {
  return (
    <div className="project">
      <img className='project-image' src={image} />
      <h3>{title}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
      <a className="code-link" href={github} target="_blank">Link to Code </a>
    </div>
  )
}

export default ProjectItem;