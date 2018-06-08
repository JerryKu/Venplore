import React, { Component } from 'react';

class featuredActivityCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="activity-card">
        <img className="activity-card-img" src={this.props.image}/>
        <div className="activity-card-text">
          <h2>{this.props.name}</h2>
          <div className="activity-card-description">
            {(this.props.description.length > 150) ?
              this.props.description.substring(0, 150) + "..." :
              this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default featuredActivityCard;
