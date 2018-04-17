import React from "react";
import { connect } from "react-redux";
import actions from '../../actions/index.jsx'
import Activity from './Activity.jsx'


class ConnectedActivityList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div className="activity-list-section">
        {this.props.activityList.map((activity, index) => (
          <div
            key={index}
            onClick={() => {
              this.props.setActivity(activity);
            }}
          >
            <Activity
              image={activity.eventInfo.imageLink}
              name={activity.eventInfo.name}
              score={activity.adventureScore}
            />
          </div>
        ))}
      </div>;
  }
}

const mapStateToProps = state => {
  return { activityList: state.activityList };
};

const mapDispatchToProps = dispatch => {
  return {
    setActivity: activity => {
      dispatch(actions.setActivity(activity));
    }
  };
};

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(ConnectedActivityList);

export default ActivityList;

