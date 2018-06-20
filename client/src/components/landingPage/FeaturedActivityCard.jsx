import React, { Component } from 'react';

class FeaturedActivityCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="activity-card">
        <img className="activity-card-img" src={this.props.image}/>
        <div className="activity-card-text">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default FeaturedActivityCard;
