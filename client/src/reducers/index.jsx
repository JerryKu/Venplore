import { combineReducers } from 'redux';
import currentActivity from './currentActivity.jsx';
import activityList from './activityList.jsx';
import filters from './filters.jsx';
import createActivity from './activityCreation.jsx';

const venploreApp = combineReducers({
  createActivity,
  currentActivity,
  activityList,
  filters,
});

export default venploreApp;
