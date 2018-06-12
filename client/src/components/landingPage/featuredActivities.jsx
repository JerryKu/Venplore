import React, { Component } from 'react';
import FeaturedActivityCard from './FeaturedActivityCard.jsx';
import SearchBar from './SearchBar.jsx'
import { withRouter } from 'react-router-dom';

class FeaturedActivities extends Component {
    constructor(props){
      super(props);
    }
    handleClick(){
      this.props.history.push('/finding')
    }
    render(){
      return (
        <div className="featuredActivities grid-full">
          <div className="main-featured"><h3>things to do in</h3> <h1>San Jose</h1></div><div className="relative"><SearchBar {...this.props}/></div>
          <div className="main-featured"><img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg"/></div>
          {this.props.activityList.map((activity, index)=>(
            <div
              key={index}
              onClick= {()=> {
                this.props.setActivity(activity);
                this.handleClick();
              }}
            >
              <FeaturedActivityCard
              image={activity.eventInfo.imageLink}
              name={activity.eventInfo.name}
              description={activity.eventInfo.description}/>
            </div>
          ))}
        </div>
      );
    }
}

export default withRouter(FeaturedActivities);
