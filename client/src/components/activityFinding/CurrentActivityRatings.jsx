import React from 'react';

const CurrentActivityRatings = (props) => {
  const activityRatings = Object.keys(props.eventRatings);
  const ratingTitles = ["Overall Enjoyability", "Cost", "Mental Effort", "Physical Effort", "Nature Level", "Social Level", "Duration"]
  return (
    <div className='current-activity-ratings container-background-orange text-orange'>
      <div className="content-container">
        <div className="text-large">Current Ratings</div>
        {activityRatings.map((rating, index) => {
          return <div className="content-container text-medium" key={rating}>
              {ratingTitles[index]}: 
              <span className='float-right'>
                {props.eventRatings[activityRatings[index]]}
              </span>
            </div>;
        })}
      </div>
    </div>
  )
}

export default CurrentActivityRatings;