import * as types from '../constants/actionTypes';

export function setSearchVal(searchVal){
  return {
    type: types.SET_SEARCH_VAL,
    searchVal: searchVal,
  };
};

export function searchActivityList(list, searchVal){
  return {
    type: types.SEARCH_ACTIVITY_LIST,
    list: list,
    searchVal: searchVal,
  };
};
