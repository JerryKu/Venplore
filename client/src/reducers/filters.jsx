const filterDefault = [
  ['Overall Enjoyability', 'overallEnjoyability', 5],
  ['Cost', 'cost', 0],
  ['Mental Effort', 'mentalEffort', 0],
  ['Physical Effort', 'physicalEffort', 0],
  ['Nature Level', 'natureLevel', 5],
  ['Social Level', 'socialLevel', 0],
  ['Duration', 'duration', 5],
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
