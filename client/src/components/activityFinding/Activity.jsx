import React from "react";

const Activity = ({image, name, score}) => {
  return <div className="activity-list-item">
      <h1 />
      <p>{name}</p>
      <span>Adventure Score: {score}</span>
      <img className='activity-list-image' src={image} />

    </div>
}
export default Activity;
