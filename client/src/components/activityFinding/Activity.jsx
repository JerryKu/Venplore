import React from "react";

const Activity = ({image, description}) => {
  return <div className="activity-list-item">
      <h1 />
      <img className='activity-list-image' src={image} />
      <p>{description}</p>
    </div>
}
export default Activity;
