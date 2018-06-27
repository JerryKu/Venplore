import * as types from '../constants/actionTypes';

const defaultActivity = {
  eventInfo: {},
  eventRatings: {},
}

const currentActivity = (state = defaultActivity, action) => {
  switch (action.type) {
    case types.SET_ACTIVITY:
      return action.activity;
    default:
      return state;
  }
};

export default currentActivity;
