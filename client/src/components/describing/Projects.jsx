import React from 'react';
import ProjectItem from './ProjectItem.jsx'

const projects = [
  {
    image:
      "https://www.underconsideration.com/brandnew/archives/youtube_2017_logo_old_elements.png",
    title: "YouTube Emulator",
    position: "Back-End Engineer",
    description:
      "The Front-End microsorvice for a YouTube emulator that received all requests from the client, routes them to the proper microservice, and returns search results.",
    github: "https://github.com/andrewchen44/Client-Service"
  },
  {
    image:
      "https://brandcdn.exacttarget.com/blog/uploads/2017/01/Screen-Shot-2017-01-23-at-11.37.38-AM.png",
    title: "Siren",
    position: "Full-Stack Engineer",
    description:
      "A web application that allowed users to find and book local artists.",
    github: "https://github.com/HappeningsHRSF83/gitPullRebase/tree/dev"
  },
  {
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/shutterstock_164716904-760x400.jpg",
    title: "Happenings",
    position: "Full-Stack Engineer",
    description:
      " An online platform that allowed users to upload and search for events.",
    github: "https://github.com/HappeningsHRSF83/Happenings"
  },
  {
    image:
      "https://tessla.org/wp-content/uploads/2017/06/Portfolio20Management20Service20-20Individual20Service.jpg",
    title: "Portfolio Rebalancer",
    position: "Front-End Engineer",
    description:
      "A tool that helps an indivudal determine how much they need to rebalance their portfolio based on their current portfolio and risk tolerance level.",
    github: "https://github.com/andrewchen44/portfolio-helper"
  }
];

const Projects = (props) => {
  return <div className="projects-section content-container">
      <div className='section-title'>What else I've been working on</div>
        <div className='project-items'>
          {projects.map((project) => {
            return <ProjectItem key={project.title} image={project.image} title={project.title} position={project.position} description={project.description} github={project.github}/>
          })}
        </div>
    </div>;
}

export default Projects;