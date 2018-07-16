import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/creationActions.js';
import EventCreator from '../components/eventCreating/EventCreator.jsx';

const EventCreatorContainer = props => (
  <EventCreator {...props} />
);

const mapStateToProps = state => {
  return {
   filters: state.filters
  }
};

export default connect(mapStateToProps)(EventCreatorContainer);