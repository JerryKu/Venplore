import React from "react";

class About extends React.Component {
  constructor(){
    super();
  }
  render(){
    return <div className="about-page">
        <div className="info-bar">
          <div>
            <h2>Andrew Chen</h2>
            <img src="https://i.imgur.com/iflBcBK.png" />
            <h3>Welcome to Venplore!</h3>
            <p>
              Venplore is a platform that aims to kill bordeom, forever. On Venplore you can find an activity that matches your current mood as closely as possibly and upload your own for others to try out. The only limit is your imagination! 
            </p> 
              
            <p>
              As a creative problem solver, I am always looking for harder challenges to conquer. Feel free to reach out if you have any suggestions for Venplore or would like to help out!  
            </p>
            <h4>
              andrewchen.c44@gmail.com
            </h4>
            
            <a href='https://github.com/andrewchen44/Venplore' target='_blank'> Link to Code </a>
          </div>
        </div>
        <div className="projects-section">
          <h2 style={{paddingBottom: '2.5%', fontSize: '2em'}}>What else I've been working on</h2>
          <div className="project-items">

            <div className='project'>
              <img className='project-image'src='https://www.underconsideration.com/brandnew/archives/youtube_2017_logo_old_elements.png'/>
              <h3>YouTube Emulator</h3>
              <h4>Back-End Engineer</h4>
              <p>The Front-End microsorvice for a YouTube emulator that received all requests from the client, routes them to the proper microservice, and returns search results.</p>
              <a className='code-link' href='https://github.com/andrewchen44/Client-Service' target='_blank'> Link to Code </a>
            </div>

            <div className='project'>
              <img className='project-image' src='https://brandcdn.exacttarget.com/blog/uploads/2017/01/Screen-Shot-2017-01-23-at-11.37.38-AM.png'/>
              <h3>Siren</h3>
              <h4>Full-Stack Engineer</h4>
              <p>A web application that allowed users to find and book local artists.</p>
              <a className='code-link' href='https://github.com/HappeningsHRSF83/gitPullRebase/tree/dev' target='_blank'> Link to Code </a>
            </div>

            <div className='project'> 
              <img className='project-image' src='https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/shutterstock_164716904-760x400.jpg'/>
              <h3>Happenings</h3>
              <h4>Full-Stack Engineer</h4>
              <p>An online platform that allowed users to upload and search for events.</p>
              <a className='code-link' href='https://github.com/HappeningsHRSF83/Happenings' target='_blank'> Link to Code </a>
            </div>



          </div>
        </div>
      </div>;
  }
}

export default About;
