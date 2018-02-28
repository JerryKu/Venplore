const initialState = {
  image: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg",
  description: 'Adventure Awaits!',
};

export default (state = initialState, action) => {
  switch (action.type) { 
    case 'SET_ACTIVITY':
      return state;
    default:
      return state;
  }
};
