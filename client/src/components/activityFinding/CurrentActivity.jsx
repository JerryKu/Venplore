import React from "react";

const CurrentActivity = (props) => {
  const ratingTitles = ["Overall Enjoyability", "Cost", "Mental Effort", "Physical Effort", "Nature Level", "Social Level", "Duration"]
  const activityRatings = Object.keys(props.eventRatings);
    return (<div className="current-activity-section grid-root grid-row-root">
      <div className="content-container primary-title-blue activity-title">
        {props.eventInfo.name}
      </div>
      <div className="main-image content-container">
        <img src={props.eventInfo.imageLink} />
      </div>
      <div className="current-event-description content-container">
        {props.eventInfo.description}
      </div>
      <div className="content-container current-event-ratings-container">
        <div className="secondary-title-green">Current Ratings</div>
        {activityRatings.map((rating, index) => {
          return <div className="content-container" key={rating}>
              {ratingTitles[index]}: {props.eventRatings[activityRatings[index]]}
            </div>;
        })}
      </div>
    </div>);
}

export default CurrentActivity;

// TODO: Break sections into individual components