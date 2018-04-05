import { combineReducers } from 'redux';
import activities from './activities/index.jsx';

const venploreApp = combineReducers({
  activities,
});

export default venploreApp;
