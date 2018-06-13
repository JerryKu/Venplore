const setActivity = (activity) => {
  return {
    type: 'SET_ACTIVITY',
    activity,
  };
};
const setAllActivityList = (list) => {
  return{
    type: 'SET_ALL_ACTIVITIES',
    list,
  };
};
const setFilterValue = (filter, value) => {
  return {
    type: 'SET_FILTER',
    filter,
    value,
  };
};
const setActivityList = (list) => {
  return {
    type: 'SET_ACTIVITY_LIST',
    list,
  };
};
const searchActivityList = (list, searchVal) => {
  return {
    type: "SEARCH_ACTIVITY_LIST",
    list,
    searchVal,
  };
};
const updateActivityList = (list, filters) => {
  return {
    type: 'UPDATE_ACTIVITY_LIST',
    list,
    filters,
  };
};
const actions = {
  setActivity: setActivity,
  setFilterValue: setFilterValue,
  setActivityList: setActivityList,
  updateActivityList: updateActivityList,
  searchActivityList: searchActivityList,
  setAllActivityList: setAllActivityList,
};

export default actions;
