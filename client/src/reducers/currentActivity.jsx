let currentActivityDefault = {
  image:"https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,q_65,w_768/v1/clients/norway/Fishing_2152634f-ba23-4044-8145-6ec3bab642bf.png",
  description: "fishing",
};

const currentActivity = (state = currentActivityDefault, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY':
      return Object.assign({}, state, {
        image: action.activity.image,
        description: action.activity.description,
      });
    default:
      return state;
  }
};

export default currentActivity;
