import React from "react";
import { connect } from "react-redux";
import Activity from './Activity.jsx'

class ConnectedActivityList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <span className="activities-list">
      Other Activities:
      {this.props.activityList.map((activity, index) => 
        (<Activity key={index} image={activity.image} description={activity.description} />)
    )}
    </span>;
  }
}

const mapStateToProps = state => {
  return {
    activityList: state.activityList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setcurrent: activity => dispatch(setCurrent(activity))
  };
};
const ActivityList = connect(mapStateToProps, mapDispatchToProps)(ConnectedActivityList);

export default ActivityList;

