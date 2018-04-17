import React from "react";
import CurrentActivity from './CurrentActivity.jsx';
import FilterBar from './FilterBar.jsx';
// import SearchBar from './SearchBar.jsx';
import ActivitiesList from './ActivitiesList.jsx';
import { Link } from 'react-router-dom';

class ActivityFinder extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <div className='activity-section'>
      <div className='filter-section'>
          <div> <FilterBar /> </div>
      </div>
        <div className='activity-list-section'> <ActivitiesList /> </div>
        <div className='current-activity-section'> <CurrentActivity /> </div>
    </div>
  }
}

export default ActivityFinder;
