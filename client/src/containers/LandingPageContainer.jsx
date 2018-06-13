import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.jsx';
import ActivityList from '../components/activityFinding/ActivitiesList.jsx';
import LandingPage from '../components/landingPage/LandingPage.jsx';

const LandingPageContainer = props => (
  <LandingPage {...props} />
);

const mapStateToProps = state => {
  return {
    createActivity: state.createActivity.state,
    allActivities: state.allActivities,
   };
};

const mapDispatchToProps = dispatch => {
  return {
    setActivity: activity => {
      dispatch(actions.setActivity(activity));
    },
    updateActivityList: (list, filters) =>  {
      dispatch(actions.updateActivityList(list, filters));
    },
    searchActivityList: (list, searchVal) => {
      dispatch(actions.searchActivityList(list, searchVal))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);
