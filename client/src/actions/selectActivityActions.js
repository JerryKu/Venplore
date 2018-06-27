import * as types from '../constants/actionTypes';

export function setActivity(activity){
  return {
    type: types.SET_ACTIVITY,
    activity: activity,
  };
};

export function hideCurrent(){
  return{
    type: types.HIDE_CURRENT_ACTIVITY,
  }
}