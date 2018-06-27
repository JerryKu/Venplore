import * as types from '../constants/actionTypes';

export function setActivity (activity){
  return {
    type: types.SET_ACTIVITY,
    activity: activity,
  };
};
