import * as types from '../constants/actionTypes';

const allActivities = (state = [], action) => {
  switch (action.type) {
    case types.SET_ALL_ACTIVITIES:
      return action.list;
    default:
      return state;
  }
};

export default allActivities;
