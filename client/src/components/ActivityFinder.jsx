import React from "react";
import { Link } from 'react-router-dom';

class ActivityFinder extends React.Component {
  constructor(){
    super();

  }

  render(){
    return <span>
      activity finder page
      <Link to='/create'>Event Creation Page</Link>
    </span>;

  }
}

export default ActivityFinder;
