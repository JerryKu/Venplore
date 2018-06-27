import * as types from '../constants/actionTypes';

const defaultActivity = {
  eventInfo: {},
  eventRatings: {},
  display: false,
}

const currentActivity = (state = defaultActivity, action) => {
  switch (action.type) {
    case types.SET_ACTIVITY:
      return {
        eventInfo: action.activity.eventInfo,
        eventRatings: action.activity.eventRatings,
        display: true,
      };
    case types.HIDE_CURRENT_ACTIVITY:
      return Object.assign({}, state, {display: false}  )
    default:
      return state;
  }
};

export default currentActivity;
