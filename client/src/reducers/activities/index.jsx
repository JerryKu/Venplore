const initialState = [
  {
    image: "https://wtop.com/wp-content/uploads/2017/07/ThinkstockPhotos-608516088.jpg",
    description: 'Fishing',
  },
  {
    image: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg",
    description: 'Kyacking',
  },
  {
    image: "https://www.usnews.com/dims4/USNEWS/eaa8af8/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F22%2Ff2%2F4609fa4747298709af9f1269bbd6%2F150710-hiking-stock.jpg",
    description: 'Hiking',
  },
  {
    image: "http://cdn.shopify.com/s/files/1/0104/0442/files/sunbathing.jpg?1805",
    description: 'Sun Bathing',
  },
  {
    image: "http://www.heroicstoic.com/wp-content/uploads/2012/12/Taking-a-nap.jpg",
    description: 'Taking a nap',
  },
  {
    image: "https://cmeimg-a.akamaihd.net/640/cme/cuteness_data/s3fs-public/diy_blog/Why-Would-A-Dog-Stare-and-Growl-at-the-Wall.jpg",
    description: 'Stare at a wall',
  },
  
];


export default (state = initialState, action) => {
  switch (action.type) { 
    case 'SET_ACTIVITY':
      return state;
    default:
      return state;
  }
};
