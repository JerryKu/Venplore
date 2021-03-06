import * as types from '../constants/actionTypes';

const rankActivities = (list, filters) => {
  let scoredList = [];
  list.forEach((activity) => {
    let adventureScore = 0;
    const n = filters.length;
    for (let i = 0; i < n; i += 1) {
      const filter = filters[i][1];
      const filterRating = filters[i][2];
      const activityRating = activity.eventRatings[filter];
      adventureScore += Math.abs(filterRating - activityRating);
    };
    adventureScore = (5 - (adventureScore / n)).toFixed(2);
    let scoredAdventure = Object.assign(activity, {adventureScore: adventureScore});
    scoredList.push(scoredAdventure);
  });
  scoredList.sort((a, b) => {
    return b.adventureScore - a.adventureScore;
  });
  return scoredList;
};

const searchActivities = (list, searchVal) => {
  const searchedList = list.filter((activity)=>{
    return (activity.eventInfo.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1);
  })
  return searchedList;
}

const activityList = (state = [], action) => {
  switch (action.type) {
    case types.SET_ACTIVITY_LIST:
      return action.list;
    case types.UPDATE_ACTIVITY_LIST:
      return rankActivities(action.list, action.filters);
    case types.SEARCH_ACTIVITY_LIST:
      return searchActivities(action.list, action.searchVal)
    default:
      return state;
  }
};

export default activityList;
