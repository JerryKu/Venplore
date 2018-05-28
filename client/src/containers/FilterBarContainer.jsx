import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.jsx';
import FilterBar from '../components/activityFinding/FilterBar.jsx';

const FilterBarContainer = props => (
  <FilterBar {...props} />
);

const mapStateToProps = state => {
  return { 
    filters: state.filters,
    activityList: state.activityList, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterValue: (index, value) => {
      dispatch(actions.setFilterValue(index, value));
    },
    updateActivityList: (list, filters) => {
      dispatch(actions.updateActivityList(list, filters));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterBarContainer);