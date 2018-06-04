const filterDefault = [
  ['Cost', 'cost', 0],
  ['Mental Effort', 'mentalEffort', 0],
  ['Physical Effort', 'physicalEffort', 0],
  ['Nature Level', 'natureLevel', 0],
  ['Social Level', 'socialLevel', 0],
  ['Duration', 'duration', 0],
];

const filters = (state = filterDefault, action) => {
  switch (action.type) {
    case 'SET_FILTER':
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
