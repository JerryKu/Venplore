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
    componentDidMount(){
      let mainActivity = document.getElementsByClassName('activity-card')[0];
      let activity = document.getElementsByClassName('activity-card')[1];
      if(document.body.clientWidth > 1023 && mainActivity !== undefined && activity !== undefined){
        window.addEventListener('scroll', (e)=>{
          let scrollDiff1 = 500 - window.scrollY;
          let scrollDiff2 = 550 - window.scrollY;
          mainActivity.style.top = scrollDiff1 <= 0 ? 0 : scrollDiff1 + 'px';
          activity.style.top = scrollDiff2 <= 0 ? 0 : scrollDiff2 + 'px';
        })
      }
    }
    componentDidUpdate(){
      let mainActivity = document.getElementsByClassName('activity-card')[0];
      let activity = document.getElementsByClassName('activity-card')[1];
      if(document.body.clientWidth > 1023 && mainActivity !== undefined && activity !== undefined){
        window.addEventListener('scroll', (e)=>{
          let scrollDiff1 = 500 - window.scrollY;
          let scrollDiff2 = 550 - window.scrollY;
          mainActivity.style.top = scrollDiff1 <= 0 ? 0 : scrollDiff1 + 'px';
          activity.style.top = scrollDiff2 <= 0 ? 0 : scrollDiff2 + 'px';
        })
      }
    }
    render(){
      return (
        <div className="featuredActivities grid-full">
          <div className="featured-header-section">
            <div className="featured-header"><h3>things to do in</h3> <h1>San Jose</h1></div>
            <div className="relative featured-search-bar"><SearchBar {...this.props}/></div>
          </div>
          <div className="activity-card-section">
            {this.props.allActivities.map((activity, index)=>(
              <div
                className="activity-card-container relative"
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
        </div>
      );
    }
}

export default withRouter(FeaturedActivities);
