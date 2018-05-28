// refactir into stateless functional component 
import React from "react";
import { connect } from "react-redux"

class CurrentActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ratingTitles = ["Overall Enjoyability", "Cost", "Mental Effort", "Physical Effort", "Nature Level", "Social Level", "Duration"]
    const activityRatings = Object.keys(this.props.eventRatings);
    return <div className="current-activity-section">
        <div className="event-info content-container">
          <div className="primary-title-blue">
            {this.props.eventInfo.name}
          </div>
          <div className="main-image">
            <img src={this.props.eventInfo.imageLink} />
          </div>
          <div className="current-event-description box-shadow-container">
            {this.props.eventInfo.description}
          </div>
        </div>
        <div className="box-shadow-container current-event-ratings-container">
          <div className="secondary-title-green">Current Ratings</div>
          <br />
          {activityRatings.map((rating, index) => {
            return <div className="event-rating content-container" key={rating}>
                {ratingTitles[index]}: {this.props.eventRatings[activityRatings[index]]}
              </div>;
          })}
        </div>
      </div>;
  }
}


const mapStateToProps = state => {
  return {
    eventInfo: state.currentActivity.eventInfo,
    eventRatings: state.currentActivity.eventRatings,
  }
};


const ConnectedCurrentActivity = connect(mapStateToProps)(CurrentActivity);

export default ConnectedCurrentActivity;
