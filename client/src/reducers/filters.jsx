let filterDefault = {
  overallEnjoyability: 5,
  price: 0,
  mentalEffort: 0,
  physicalEffort: 0,
  natureLevel: 5,
  socialLevel: 0,
  duration: 5,
};

const filters = (state = filterDefault, action) => {
  switch (action.type){
    case 'UPDATE':
      return Object.assign({}, state, {
        
      });
    default:
      return state;
  }
}

export default filters;
