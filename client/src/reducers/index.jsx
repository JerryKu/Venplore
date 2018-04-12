import { combineReducers } from 'redux';
import currentActivity from './currentActivity.jsx';
import activityList from './activityList.jsx';
import filters from './filters.jsx';

const venploreApp = combineReducers({
  currentActivity,
  activityList,
  filters,
});

export default venploreApp;
