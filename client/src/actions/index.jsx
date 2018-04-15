const setActivity = (activity) => {
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

const actions = {
  setActivity: setActivity,
  setFilterValue: setFilterValue,
  setActivityList: setActivityList,
};

export default actions;
