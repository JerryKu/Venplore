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

const actions = {
  setActivity: setActivity,
  setFilterValue: setFilterValue,
};

export default actions;
