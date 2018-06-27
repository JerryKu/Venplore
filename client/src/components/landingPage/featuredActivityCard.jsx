import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FeaturedActivityCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="activity-card absolute">
        <img className="activity-card-img" src={this.props.image !== '' ? this.props.image : 'http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-768x576.jpg'}/>
        <div className="activity-card-hover relative">
          <div className="activity-card-description">
            <p className="activity-card-text">{
              this.props.description.length > 150 ? this.props.description.substring(0, 150) + "..." : this.props.description.substring(0, 150)}</p>
          </div>
          <div className="activity-card-title">
            <h2>{this.props.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedActivityCard;
