const activityList = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_ACTIVITY_LIST':
      return action.list;
    default:
      return state;
  }
};

export default activityList;
