// refactir into stateless functional component 
import React from "react";
import { connect } from "react-redux"

class CurrentActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="current-activity-section">
        <div className="current-event-title">
          {this.props.eventInfo.name}
        </div>
        <div className="main-image-section">
          <img className="main-image" src={this.props.eventInfo.imageLink} style={{ maxWidth: "70%", maxHeight: "70%" }} />
        </div>
        <div className="current-event-description">
          {this.props.eventInfo.description}
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

const mapDispatchToProps = dispatch => {
  return {
  }
};

const ConnectedCurrentActivity = connect(mapStateToProps, mapDispatchToProps)(CurrentActivity);

export default ConnectedCurrentActivity;