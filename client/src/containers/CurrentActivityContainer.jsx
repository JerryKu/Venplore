import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.jsx';
import CurrentActivity from '../components/activityFinding/CurrentActivity.jsx';

const CurrentActivityContainer = props => (
  <CurrentActivity {...props} />
);

const mapStateToProps = state => {
  return {
    eventInfo: state.currentActivity.eventInfo,
    eventRatings: state.currentActivity.eventRatings,
  }
};

export default connect(mapStateToProps)(CurrentActivityContainer);