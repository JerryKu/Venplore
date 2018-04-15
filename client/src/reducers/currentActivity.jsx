const currentActivity = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY':
      return action.activity;
    default:
      return state;
  }
};

export default currentActivity;
