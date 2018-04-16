const activityList = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVITY_LIST':
      return action.list;
    case 'UPDATE_ACTIVITY_LIST':
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default activityList;
