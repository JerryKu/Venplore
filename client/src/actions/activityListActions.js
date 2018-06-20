import * as types from '../constants/actionTypes';

export function setAllActivityList(list) {
  return{
    type: types.SET_ALL_ACTIVITIES,
    list: list,
  };
};
export function setActivityList(list){
  return {
    type: types.SET_ACTIVITY_LIST,
    list,
  };
};
export function updateActivityList(list, filters){
  return {
    type: types.UPDATE_ACTIVITY_LIST,
    list: list,
    filters: filters,
  };
};
