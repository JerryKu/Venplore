import React from "react";
import actions  from '../../actions/index.jsx'
import ActivityListItem from './ActivityListItem.jsx'

const ActivityList = (props) => {
  return <div className="activity-list-section">
      <div className='primary-title-blue'>Your Top Adventures</div>
      {props.activityList.map((activity, index) => (
        <div
          key={index}
          onClick={() => {
            props.setActivity(activity);
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

export default ActivityList;
