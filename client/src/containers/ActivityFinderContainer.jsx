import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/creationActions.js';
import ActivityFinder from '../components/activityFinding/ActivityFinder.jsx';

const ActivityFinderContainer = props => (
  <ActivityFinder {...props} />
);

const mapStateToProps = state => {
  return {
    displayCurrent: state.currentActivity.display,
    createActivity: state.createActivity.state,
   };
};

const mapDispatchToProps = dispatch => {
  return {
    setCreationState: state => {
      dispatch(actions.setCreationState(state));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFinderContainer);
