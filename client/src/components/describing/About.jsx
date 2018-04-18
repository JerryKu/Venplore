import React from "react";

class About extends React.Component {
  constructor(){
    super();
  }
  render(){
    return <div className='about-page'>
      <div className='info-bar'>
        info bar
      </div>
      <div className='projects'>
        projects
      </div>
    </div>;
  }
}

export default About;
