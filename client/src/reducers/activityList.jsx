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

const activityList = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVITY_LIST':
      return action.list;
    case 'UPDATE_ACTIVITY_LIST':
      return rankActivities(action.list, action.filters);
    default:
      return state;
  }
};

export default activityList;
