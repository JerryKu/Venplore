import * as types from '../constants/actionTypes'

const defaultState = {
  state: '!creating',
}

const createActivity = (state = defaultState, action) => {
  console.log('action in reducer', action)
  switch (action.type) {
    case types.SET_CREATION_STATE:
      return { state: action.state};
    default:
      return state;
  }
};

export default createActivity;
