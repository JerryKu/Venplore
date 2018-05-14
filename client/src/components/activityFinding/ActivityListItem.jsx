import React from "react";

const ActivityListItem = ({image, name, score}) => {
  return <div className="activity-list-item">
      <div className="secondary-title-green">{name}</div>
      <div>Adventure Score: {score}</div>
      <img className='activity-list-image' src={image} />

    </div>
}
export default ActivityListItem;
