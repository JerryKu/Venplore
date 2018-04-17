const defaultActivity = {
  eventInfo: {},
  eventRatings: {},
}

const currentActivity = (state = defaultActivity, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY':
      return action.activity;
    default:
      return state;
  }
};

export default currentActivity;
