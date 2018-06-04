import React from "react";
import CurrentActivityContainer from '../../containers/CurrentActivityContainer.jsx';
import FilterBarContainer from '../../containers/FilterBarContainer.jsx';
// import SearchBar from './SearchBar.jsx';
import ActivitiesListContainer from '../../containers/ActivityListContainer.jsx';
import CreateActivity from '../eventCreating/EventCreator.jsx'

class ActivityFinder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      createActivity: false,
    };
    this.displayCreation = this.displayCreation.bind(this);
  }

  displayCreation() {
    this.setState({
      createActivity: !this.state.createActivity,
    })
  }

  render(){
    return (<div>
        <div className="activity-finding-section">
          <FilterBarContainer />
          <ActivitiesListContainer />
          <CurrentActivityContainer />
        </div>
        <div>{this.state.createActivity ? <CreateActivity displayCreation={this.displayCreation} /> : null}</div>
      </div>); 
  }
}

export default ActivityFinder;
