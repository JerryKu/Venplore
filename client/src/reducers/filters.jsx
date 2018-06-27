import * as types from '../constants/actionTypes';

const filterDefault = [
  ['Cost', 'cost', 0],
  ['Mental Effort', 'mentalEffort', 0],
  ['Physical Effort', 'physicalEffort', 0],
  ['Nature', 'natureLevel', 0],
  ['Social', 'socialLevel', 0],
  ['Time Commitment', 'duration', 0],
];

const filters = (state = filterDefault, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return state.map((filter) => {
        if (filter[0] === action.filter) {
          return [filter[0], filter[1], action.value];
        }
        return filter;
      });
    default:
      return state;
  }
};

export default filters;
