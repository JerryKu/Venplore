const setActivity = (activity) => {
  return {
    type: 'SET_ACTIVITY',
    activity,
  };
};

const setFilterValue = (index, value) => {
  return {
    type: 'SET_FILTER',
    index,
    value,
  };
};

const actions = {
  setActivity: setActivity,
  setFilterValue: setFilterValue,
};

export default actions;
