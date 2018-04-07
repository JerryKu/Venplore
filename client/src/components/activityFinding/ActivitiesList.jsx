import React from "react";
import { connect } from "react-redux";
import setActivity from '../../actions/index.jsx'
import Activity from './Activity.jsx'



class ConnectedActivityList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <span className="activities-list">
      Other Activities:
      {this.props.activityList.map((activity, index) => 
        (<span key={index} onClick={() => { 
            this.props.setActivity(activity);
          }} >
          <Activity image={activity.image} description={activity.description}/>
        </span>)
    )}
    </span>;
  }
}

const mapStateToProps = state => {
  return { activityList: state.activityList };
};

const mapDispatchToProps = dispatch => {
  return {
    setActivity: activity => {
      dispatch(setActivity(activity));
    }
  };
};

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(ConnectedActivityList);

export default ActivityList;

