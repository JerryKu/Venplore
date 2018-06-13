const allActivities = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_ACTIVITIES':
      return action.list;
    default:
      return state;
  }
};

export default allActivities;
