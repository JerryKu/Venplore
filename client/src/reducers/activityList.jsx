const rankActivities = (list, filters) => {
  let scoredList = [];
  list.forEach((activity) => {
    let adventureScore = 0;
    const n = filters.length;
    for (let i = 0; i < n; i += 1) {
      const filter = filters[i][1];
      const filterRating = filters[i][2];
      const activityRating = activity.eventRatings[filter];
      console.log(`${filter}`, activityRating);
      console.log('filter rating', filterRating)
      adventureScore += Math.abs(filterRating - activityRating);
    };
    adventureScore /= n;
    let scoredAdventure = Object.assign(activity, {adventureScore: adventureScore});
    scoredList.push(scoredAdventure);
  });
  return scoredList;
};

const activityList = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVITY_LIST':
      return action.list;
    case 'UPDATE_ACTIVITY_LIST':

      console.log(rankActivities(action.list, action.filters));
      return state;
    default:
      return state;
  }
};

export default activityList;
