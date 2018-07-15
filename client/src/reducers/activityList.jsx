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
      adventureScore += (Math.pow((Math.abs(filterRating - activityRating)), 2)/2) * 20;
      // Adventure score is calculated by taking the difference between desired rating and actual rating. The difference is then squared and divided by two. This is so that greater differences will have a greater impact on the score because if a person is looking for a 0 in cost and the activity has a 5, this should be considered in the score. The score is then multiplied by 20 to scale it to 100.
    };
    adventureScore = (100 - (adventureScore / n)).toFixed(0);
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
