import React from "react";
import Activity from './Activity.jsx'

class ActivitiesList extends React.Component {
  constructor(){
    super();

  }

  render(){
    return <span className="activities-list">
      <Activity/>
      <Activity/>
      <Activity/>
    </span>;

  }
}

export default ActivitiesList;
