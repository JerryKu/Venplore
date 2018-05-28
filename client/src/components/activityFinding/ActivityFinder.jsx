import React from "react";
import CurrentActivity from './CurrentActivity.jsx';
import FilterBar from './FilterBar.jsx';
// import SearchBar from './SearchBar.jsx';
import ActivitiesListContainer from '../../containers/ActivityListContainer.jsx';
import CreateActivity from '../eventCreating/EventCreator.jsx'
import { Link } from 'react-router-dom';

class ActivityFinder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      createActivity: true,
    };
  }

  render(){
    return <div>
        <div className="activity-finding-section">
          <FilterBar />
          <ActivitiesListContainer />
          <CurrentActivity />
        </div>
        <div>{this.state.createActivity ? <CreateActivity /> : null}</div>
      </div>; 
  }
}

export default ActivityFinder;
