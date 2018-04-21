import React from "react";

const Activity = ({image, name, score}) => {
  return <div className="activity-list-item">
      <b><div>{name}</div></b>
      <div>Adventure Score: {score}</div>
      <img className='activity-list-image' src={image} />

    </div>
}
export default Activity;
