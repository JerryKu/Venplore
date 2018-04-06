import React from "react";
import { connect } from "react-redux";
import Activity from './Activity.jsx'

const mapStateToProps = (state) => {
  return {
    activityList: state.activityList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setcurrent: (activity) => dispatch(setCurrent(activity))
  };
};

class ConnectedActivityList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <span className="activities-list">
    {this.props.activityList[0].image}
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

