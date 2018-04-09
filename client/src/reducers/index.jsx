import { combineReducers } from 'redux';
import currentActivity from './currentActivity.jsx';
import activityList from './activityList.jsx';

const venploreApp = combineReducers({
  currentActivity,
  activityList,
});

export default venploreApp;
