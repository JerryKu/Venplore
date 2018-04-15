const activityList = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return action.activities;
    default:
      return state;
  }
};

export default activityList;
