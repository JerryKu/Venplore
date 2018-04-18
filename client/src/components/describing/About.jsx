import React from "react";

class About extends React.Component {
  constructor(){
    super();
  }
  render(){
    return <div className='about-page'>
      <div className='info-bar'>
        <div>
          Andrew Chen
        </div>
      </div>
      <div className='projects'>
        projects
      </div>
    </div>;
  }
}

export default About;
