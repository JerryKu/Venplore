import React, { Component } from 'react';

class featuredActivityCard extends Component {

  render() {
    return (
      <div className="activity-card">
        <img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg"/>
        <div className="card-text">
          <h2>Kayaking</h2>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</div>
        </div>
      </div>
    );
  }

}

export default featuredActivityCard;
