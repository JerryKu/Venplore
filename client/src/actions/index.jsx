const setActivity(activity) {
  return {
    type: 'SET_ACTIVITY',
    activity,
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
};

export default actions;
