const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY':
      return action.artists;
    default:
      return state;
  }
};
