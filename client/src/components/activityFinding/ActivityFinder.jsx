import React from "react";
import CurrentActivityContainer from '../../containers/CurrentActivityContainer.jsx';
import FilterBarContainer from '../../containers/FilterBarContainer.jsx';
// import SearchBar from './SearchBar.jsx';
import ActivitiesListContainer from '../../containers/ActivityListContainer.jsx';
import ActivityCreatorContainer from '../../containers/ActivityCreatorContainer.jsx'

const ActivityFinder = ({ createActivity }) => {
  return (<div>
      <div className="activity-finding-section">
        <FilterBarContainer />
        <ActivitiesListContainer />
        <CurrentActivityContainer />
      </div>
      <div>{createActivity === 'creating' ? <ActivityCreatorContainer /> : null}</div>
    </div>); 
}

export default ActivityFinder;
