const defaultState = {
  state: '!creating',
}

const createActivity = (state = defaultActivity, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY':
      return action.activity;
    default:
      return state;
  }
};

export default createActivity;
