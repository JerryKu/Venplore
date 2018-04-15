import React from "react";

const Activity = ({image, name}) => {
  return <div className="activity-list-item">
      <h1 />
      <p>{name}</p>
      <img className='activity-list-image' src={image} />

    </div>
}
export default Activity;
