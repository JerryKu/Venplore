import * as types from '../constants/actionTypes';

export function setFilterValue (filter, value){
  return {
    type: types.SET_FILTER,
    filter: filter,
    value: value,
  };
};
