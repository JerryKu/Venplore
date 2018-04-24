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
            <p>
              Welcome to Venplore! This is the current project that I am
              working to solve the problem of not knowing what to do,
              forever. Venplore is a platform for people to find the perfect
              activity based on I am a creative problem solver with a
              passion for creating things that make an impact on people's
              lives and am willing to do whatever it takes to get the job
              done. Enjoy your look around!
            </p>
            <a href='https://github.com/andrewchen44/Venplore' target='_blank'> Link to Code </a>
          </div>
        </div>
        <div className="projects-section">
          <h2>What else I have done so far</h2>
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
