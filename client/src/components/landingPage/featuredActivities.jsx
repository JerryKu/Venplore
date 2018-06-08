import React from 'react';
import FeaturedActivityCard from './featuredActivityCard.jsx';
import SearchBar from './searchBar.jsx'

const FeaturedActivities = (props) => {
    return (
      <div className="featuredActivities grid-full">
        <div className="main-featured"><h3>things to do in</h3> <h1>San Jose</h1></div><div className="relative"><SearchBar/></div>
        <div className="main-featured"><img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg"/></div>
        {props.activityList.map((activity, index)=>(
          <div
            key={index}>
            <FeaturedActivityCard
            image={activity.eventInfo.imageLink}
            name={activity.eventInfo.name}
            description={activity.eventInfo.description}/>
          </div>
        ))}
      </div>
    );
}

export default FeaturedActivities;
