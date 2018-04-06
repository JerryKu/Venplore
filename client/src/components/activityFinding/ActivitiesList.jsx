import React from "react";
import { connect } from "react-redux";
import Activity from './Activity.jsx'

const mapStateToProps = (state) => {
  return {
    // activityList: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setcurrent: (activity) => dispatch(setCurrent(activity))
  };
};

class ConnectedActivityList extends React.Component {
  constructor(){
    super();
  }
  render(){
    return <span className="activities-list">
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
    </span>;
  }
}

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(ConnectedActivityList);

export default ActivityList;

