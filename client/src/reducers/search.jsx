import * as types from '../constants/actionTypes';

const currentSearch = (state = '', action) => {
  switch(action.type){
    case types.SET_SEARCH_VAL:
      return action.searchVal;
    default:
      return state;
  }
}

export default currentSearch;
