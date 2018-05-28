import React from "react";
import CurrentActivityContainer from '../../containers/CurrentActivityContainer.jsx';
import FilterBarContainer from '../../containers/FilterBarContainer.jsx';
// import SearchBar from './SearchBar.jsx';
import ActivitiesListContainer from '../../containers/ActivityListContainer.jsx';
import CreateActivity from '../eventCreating/EventCreator.jsx'
import { Link } from 'react-router-dom';

class ActivityFinder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      createActivity: false,
    };
  }

  render(){
    return <div>
        <div className="activity-finding-section">
          <FilterBarContainer />
          <ActivitiesListContainer />
          <CurrentActivityContainer />
        </div>
        <div>{this.state.createActivity ? <CreateActivity /> : null}</div>
      </div>; 
  }
}

export default ActivityFinder;
