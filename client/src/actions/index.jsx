import * as types from '../constants/actionTypes';
import { setActivity } from './selectActivityActions.js';
import { setSearchVal, searchActivityList } from './searchActions.js';
import { setActivityList, setAllActivityList, updateActivityList } from './activityListActions.js';
import { setFilterValue } from './filterActions.js';





const actions = {
  setActivity: setActivity,
  setFilterValue: setFilterValue,
  setActivityList: setActivityList,
  updateActivityList: updateActivityList,
  searchActivityList: searchActivityList,
  setAllActivityList: setAllActivityList,
  setSearchVal: setSearchVal,
};

export default actions;
