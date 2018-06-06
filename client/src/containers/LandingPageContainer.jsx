<<<<<<< HEAD
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
    activityList: state.activityList,
   };
};

const mapDispatchToProps = dispatch => {
  return {
    setActivity: activity => {
      dispatch(actions.setActivity(activity));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);
=======
import React, { Component } from 'react';
import LandingPage from '../components/landingPage/LandingPage.jsx'

class LandingPageContainer extends Component {

  render() {
    return (
      <LandingPage />
    );
  }

}

export default LandingPageContainer;
>>>>>>> started landing page, added landing page css, added url-loader for images
