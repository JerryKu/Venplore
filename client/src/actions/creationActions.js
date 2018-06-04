import * as types from '../constants/actionTypes';

export function setCreationState(state){
  return {
    type: types.SET_CREATION_STATE,
    state: state,
  };
};
