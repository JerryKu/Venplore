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
        <div className="projects">
         <h2>Past Projects</h2>
        </div>
      </div>;
  }
}

export default About;
