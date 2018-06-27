import React from "react";
import CurrentActivityContainer from '../../containers/CurrentActivityContainer.jsx';
import FilterBarContainer from '../../containers/FilterBarContainer.jsx';
// import SearchBar from './SearchBar.jsx';
import ActivitiesListContainer from '../../containers/ActivityListContainer.jsx';
import ActivityCreatorContainer from '../../containers/ActivityCreatorContainer.jsx';
import FooterBar from '../navigating/FooterBar.jsx';

const ActivityFinder = ({ createActivity, displayCurrent }) => {
  let content = null;
  if(displayCurrent) {
    content = <CurrentActivityContainer /> 
  } else {
    content = <div className="activity-finding-section">
    <FilterBarContainer />
    <ActivitiesListContainer />
  </div>
  }
  
  return (<div className="grid-full">
      {content}
      <FooterBar />
      <div>{createActivity === 'creating' ? <ActivityCreatorContainer /> : null}</div>
    </div>);
}

export default ActivityFinder;
