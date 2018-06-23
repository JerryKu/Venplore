import React from "react";

const ActivityListItem = ({image, name, score, description}) => {
  const shortenedDescription = description.length > 380 ? description.substring(0, 377) + '...': description; 
  return <div className="activity-list-content">
      <img className="activity-list-image" src={image} />
      <div className="content-container">
        <div className="large-title text-orange">
          {name}: {score}
        </div>
        <div>{shortenedDescription}</div>
      </div>
    </div>;
}
export default ActivityListItem;
