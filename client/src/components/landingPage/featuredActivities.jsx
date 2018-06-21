import React, { Component } from 'react';
import FeaturedActivityCard from './FeaturedActivityCard.jsx';
import SearchBar from '../activityFinding/SearchBar.jsx'
import { withRouter } from 'react-router-dom';

class FeaturedActivities extends Component {
    constructor(props){
      super(props);
    }
    handleClick(){
      this.props.history.push('/finding');
      window.scrollTo(0, 0);
    }
    componentDidUpdate(){
      if(document.body.clientWidth >= 1024){
          document.getElementsByClassName('activity-card-container')[0].style.gridColumn = "span 2";
      }
    }
    render(){
      return (
        <div className="featuredActivities grid-full">
          <div className="featured-header"><h3>things to do in</h3> <h1>San Jose</h1></div><div className="relative featured-search-bar"><SearchBar {...this.props}/></div>
          {this.props.allActivities.map((activity, index)=>(
            <div
              className="activity-card-container"
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
