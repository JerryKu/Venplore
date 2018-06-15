const currentSearch = (state = '', action) => {
  switch(action.type){
    case "SET_SEARCH_VAL":
      return action.searchVal;
    default:
      return state;
  }
}

export default currentSearch;
