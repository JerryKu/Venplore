import React from "react";

const CurrentActivity = (props) => {
  const ratingTitles = ["Overall Enjoyability", "Cost", "Mental Effort", "Physical Effort", "Nature Level", "Social Level", "Duration"]
  const activityRatings = Object.keys(props.eventRatings);
  return <div className="current-activity-section">
      <div className="event-info content-container">
        <div className="primary-title-blue">
          {props.eventInfo.name}
        </div>
        <div className="main-image">
          <img src={props.eventInfo.imageLink} />
        </div>
        <div className="current-event-description box-shadow-container">
          {props.eventInfo.description}
        </div>
      </div>
      <div className="box-shadow-container current-event-ratings-container">
        <div className="secondary-title-green">Current Ratings</div>
        <br />
        {activityRatings.map((rating, index) => {
          return <div className="event-rating content-container" key={rating}>
              {ratingTitles[index]}: {props.eventRatings[activityRatings[index]]}
            </div>;
        })}
      </div>
    </div>;
}

export default CurrentActivity;
