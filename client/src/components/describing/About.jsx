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
          </div>
        </div>
        <div className="projects-section">
          <h2>Past Projects</h2>
          <div className="project-items">
            <div>
              <h3>Venplore</h3>
              <img src="https://static1.fitbit.com/simple.b-cssdisabled-jpg.hd7d4926725cd53dd676d7fbbe4f27a52.pack?items=%2Fcontent%2Fassets%2Fadventures%2Fimages%2Fgallery%2Fyosemite8.jpg" />
              <div>Venplore description go here</div>
            </div>
            <div>
              <h3>Youtube emulator</h3>
              <img src='https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png'/>
              <div>youtube description go here</div>
            </div>
            <div>
              <h3>Happenings</h3>
              <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/shutterstock_164716904-760x400.jpg'/>
              <div>happenings description goes here</div>
            </div>
            <div>
              <h3>Siren</h3>
              <img src='https://brandcdn.exacttarget.com/blog/uploads/2017/01/Screen-Shot-2017-01-23-at-11.37.38-AM.png'/>
              <div>siren description go here</div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default About;
