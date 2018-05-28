import React from "react";
import { connect } from "react-redux";
import actions from '../../actions/index.jsx'
import ActivityListItem from './ActivityListItem.jsx'


class ActivityList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div className="activity-list-section">
        <div className='primary-title-blue'>Your Top Adventures</div>
        {this.props.activityList.map((activity, index) => (
          <div
            key={index}
            onClick={() => {
              this.props.setActivity(activity);
            }}
          >
            <ActivityListItem
              image={activity.eventInfo.imageLink}
              name={activity.eventInfo.name}
              score={activity.adventureScore}
            />
          </div>
        ))}
      </div>;
  }
}

export default ActivityList;

