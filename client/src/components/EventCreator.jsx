import React from "react";
import { Link } from 'react-router-dom';


class EventCreator extends React.Component {
  constructor(){
    super();

  }
  render(){
    return <span>
      event creation page
    <Link to='/'>To Finder</Link>
    </span>;
  }
}

export default EventCreator;
