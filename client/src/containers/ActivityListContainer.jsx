import React from 'react';
import { connect } from 'react-redux';
import ActivityList from '../components/activityFinding/ActivitiesList.jsx';

const ActivityListContainer = props => (
  <ActivityList {...props} />
);

const mapStateToProps = state => {
  return { activityList: state.activityList };
};

const mapDispatchToProps = dispatch => {
  return {
    setActivity: activity => {
      dispatch(actions.setActivity(activity));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityListContainer);