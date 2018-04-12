const filterDefault = [
  ['Overall Enjoyability', 5],
  ['Price', 0],
  ['Mental Effort', 0],
  ['Physical Effort', 0],
  ['Nature Level', 5],
  ['Social Level', 0],
  ['Duration', 5],
];

const filters = (state = filterDefault, action) => {
  switch (action.type){
    case 'SET_FILTER':
      return state.map((filter) => {
        if (filter[0] === action.filter) {
          return [filter[0], action.value];
        }
        return filter;
      });
    default:
      return state;
  }
}

export default filters;
