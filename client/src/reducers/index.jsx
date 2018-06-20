import { combineReducers } from 'redux';
import currentActivity from './currentActivity.jsx';
import activityList from './activityList.jsx';
import filters from './filters.jsx';
import createActivity from './activityCreation.jsx';
import allActivities from './allActivities.jsx';
import searchVal from './search.jsx';

const venploreApp = combineReducers({
  createActivity,
  currentActivity,
  activityList,
  filters,
  allActivities,
  searchVal
});

export default venploreApp;
