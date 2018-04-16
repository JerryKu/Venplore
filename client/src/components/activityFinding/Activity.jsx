import React from "react";

const Activity = ({image, name, score}) => {
  return <div className="activity-list-item">
      <div className='activity-list-item-title'>{name}</div>
      <div>Adventure Score: {score}</div>
      <img className='activity-list-image' src={image} />

    </div>
}
export default Activity;
