// refactir into stateless functional component 
import React from "react";
import { connect } from "react-redux"

class CurrentActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ratings = Object.keys(this.props.eventRatings);
    return <div className="current-activity-section">
        <div className='event-info'>
          <div className="current-event-title">
            <b>{this.props.eventInfo.name}</b>
          </div>
          <div className="main-image">
            <img src={this.props.eventInfo.imageLink} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
          <div className="current-event-description">
            {this.props.eventInfo.description}
          </div>
        </div>
        <div className="current-event-ratings">
          <b><u>{this.props.eventInfo.name} Ratings:</u></b> <br />
          <div>
            Overall Enjoyability: {this.props.eventRatings.overallEnjoyability}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.overallEnjoyability} />
          </div>
          <div>
            Cost : {this.props.eventRatings.cost}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.cost} />
          </div>
          <div>
            Mental Effort: {this.props.eventRatings.mentalEffort}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.mentalEffort} />
          </div>
          <div>
            Physical Effort: {this.props.eventRatings.physicalEffort}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.physicalEffort} />
          </div>
          <div>
            Nature Level: {this.props.eventRatings.natureLevel}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.natureLevel} />
          </div>
          <div>
            Social Level: {this.props.eventRatings.socialLevel}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.socialLevel} />
          </div>
          <div>
            Duration: {this.props.eventRatings.duration}
            <input type="range" min="0" max="5" step="1" value={this.props.eventRatings.duration} />
          </div>
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