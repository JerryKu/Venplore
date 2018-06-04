import * as types from '../constants/actionTypes'

const defaultState = {
  state: '!creating',
}

const createActivity = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_CREATION_STATE:
      return action.state;
    default:
      return state;
  }
};

export default createActivity;
