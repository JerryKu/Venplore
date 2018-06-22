import React from "react";

const ActivityListItem = ({image, name, score, description}) => {
  return (
    <div className='activity-list-content'>
      <img className='activity-list-image' src={image} />
      <div className='content-container'>
        <div className="large-title text-orange">{name}</div>
        <div>Adventure Score: {score}</div>
        <div>{description}</div>
      </div>

    </div>)
}
export default ActivityListItem;
