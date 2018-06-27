import React from "react";
import actions  from '../../actions/index.jsx'
import ActivityListItem from './ActivityListItem.jsx'

const ActivityList = (props) => {
  return <div className="activity-list-section">
      <div className='text-large text-white activity-list-title'>Your Top Adventures</div>
      <div className='activity-list'>
        {props.activityList.map((activity, index) => (
          <div
            className='activity-list-item'
            key={index}
            onClick={() => {
              props.setActivity(activity);
            }}
          >
            <ActivityListItem
              image={activity.eventInfo.imageLink}
              name={activity.eventInfo.name}
              score={activity.adventureScore}
              description={activity.eventInfo.description}
              eventRatings={activity.eventRatings}
            />
          </div>
        ))}
      </div>
    </div>;
}

export default ActivityList;
