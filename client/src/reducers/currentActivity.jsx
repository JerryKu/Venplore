let currentActivityDefault = {
  image: "test",
  description: "test"
};

const currentActivity = (state = currentActivityDefault, action) => {
  switch (action.type) {
    // case 'SET_CURRENT_ACTIVITY'
    default:
      return state;
  }
};

export default currentActivity;
