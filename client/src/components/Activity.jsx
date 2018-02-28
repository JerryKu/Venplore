import React from "react";

class Activity extends React.Component{
    constructor(){
      super();
      this.state = {
        title: 'Test Title',
        image: 'test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      };
    }
      render(){
        return <div className="activity">
          <h1>{this.state.title}</h1>
          {this.state.image}
          <p>{this.state.description}</p>
        </div>;
      }
}
export default Activity;
