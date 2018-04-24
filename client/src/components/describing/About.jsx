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
            <div>
              Welcome to Venplore! This is the current project that I am
              working to solve the problem of not knowing what to do,
              forever. Venplore is a platform for people to find the perfect
              activity based on I am a creative problem solver with a
              passion for creating things that make an impact on people's
              lives and am willing to do whatever it takes to get the job
              done. Enjoy your look around!
            </div>
            <a href='https://github.com/andrewchen44/Venplore' target='_blank'> Link to Code </a>
          </div>
        </div>
        <div className="projects-section">
          <h2>What else I have done so far</h2>
          <div className="project-items">
            <div>
              <img className='project-image'src='https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png'/>
              <h3>Youtube emulator</h3>
              <div>youtube description go here</div>
              <a href='https://github.com/andrewchen44/Client-Service' target='_blank'> Link to Code </a>
            </div>
            <div>
              <img className='project-image' src='https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/shutterstock_164716904-760x400.jpg'/>
              <h3>Happenings</h3>
              <div>happenings description goes here</div>
              <a href='https://github.com/HappeningsHRSF83/Happenings' target='_blank'> Link to Code </a>
            </div>
            <div>
              <img className='project-image' src='https://brandcdn.exacttarget.com/blog/uploads/2017/01/Screen-Shot-2017-01-23-at-11.37.38-AM.png'/>
              <h3>Siren</h3>
              <div>siren description go here</div>
              <a href='https://github.com/HappeningsHRSF83/gitPullRebase/tree/dev' target='_blank'> Link to Code </a>

            </div>
          </div>
        </div>
      </div>;
  }
}

export default About;
