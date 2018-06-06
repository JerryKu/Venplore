import React, { Component } from 'react';
import FeaturedActivityCard from './featuredActivityCard.jsx';
import SearchBar from './searchBar.jsx'

class FeaturedActivities extends Component {

  render() {
    return (
      <div className="featuredActivities grid-full">
        <div className="main-featured"><h3>things to do in</h3> <h1>San Jose</h1></div><div className="relative"><SearchBar/></div>
        <div className="main-featured"><img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg"/></div>
        <FeaturedActivityCard/>
        <FeaturedActivityCard/>
        <FeaturedActivityCard/>
        <FeaturedActivityCard/>
        <FeaturedActivityCard/>
        <FeaturedActivityCard/>
        <FeaturedActivityCard/>
      </div>
    );
  }

}

export default FeaturedActivities;
