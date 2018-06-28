import React from "react";

const ActivityListItem = ({image, name, score, description, eventRatings}) => {
  const ratingTitles = ["Overall Enjoyability", "Cost", "Mental Effort", "Physical Effort", "Nature Level", "Social Level", "Duration"];

  const shortenedDescription = description.length > 380 ? description.substring(0, 377) + '...': description; 

  let ratings = Object.keys(eventRatings);
  ratings = ratings.map((rating, index) => {
    return (<div className='content-container-small  text-orange' key={index}>{ratingTitles[index]}:
    <span className='float-right'>{eventRatings[rating]}</span>
    </div>)
  })

  return <div className="activity-list-content">
      <img className="activity-list-image" src={image} />
      <div className="activity-list-item-info">
        <div className="text-large text-orange">
          {name}
        </div>
        <div>{shortenedDescription}</div>
      </div>
      <div className='activity-list-item-rating container-background-orange'>
        <div className='secondary-title text-orange'>
          Adventure Fit: <span className='float-right'>{score}</span>
        </div>
        {ratings}
      </div>
    </div>;
}
export default ActivityListItem;
