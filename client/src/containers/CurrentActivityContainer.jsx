import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/selectActivityActions';
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

const mapDispatchToProps = dispatch => {
  return {
    hideCurrent: () => {
      dispatch(actions.hideCurrent())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentActivityContainer);