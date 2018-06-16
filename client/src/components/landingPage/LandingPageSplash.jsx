import React, { Component } from 'react';
import Flickity from 'flickity';
import BottomIcon from '../../assets/BottomIcon2.png'

class LandingPageSplash extends Component {
  componentDidMount(){
    //Super hackey-way of initializing carousel on DOMContentLoaded
    //and then on rerendering
    let isFlickity = false;
    document.addEventListener('DOMContentLoaded', ()=>{
      if(isFlickity = true){
        const instance = document.querySelector('.main-carousel')
        const flk = Flickity.data(instance);
        flk.destroy();
      }
        const elem = document.querySelector('.main-carousel');
        const flckty = new Flickity(elem, {
          freeScroll: true,
          wrapAround: true,
          autoPlay: 3000,
          pauseAutoPlayOnHover: false,
        })
      isFlickity = true;
    })
    if(!isFlickity){
      const elem = document.querySelector('.main-carousel');
      const flckty = new Flickity(elem, {
        freeScroll: true,
        wrapAround: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false,
      })
      isFlickity = true;
    }
  }
  render() {
    return (
      <div className="welcomeScreen grid-full">
        <div className="landingPage relative">
            <div className="main-carousel">
              <div className='carousel-cell'><img className="featuredImage" src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg"/></div>
              <div className='carousel-cell'><img className="featuredImage" src="https://wtop.com/wp-content/uploads/2017/07/ThinkstockPhotos-608516088.jpg"/></div>
              <div className='carousel-cell'><img className="featuredImage" src="https://www.usnews.com/dims4/USNEWS/eaa8af8/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F22%2Ff2%2F4609fa4747298709af9f1269bbd6%2F150710-hiking-stock.jpg"/></div>
            </div>
            <div className="welcomeMessage">Welcome to Venplore!</div>
            <img className="bottomIcon absolute" src={BottomIcon}/>
        </div>
      </div>
    );
  }

}

export default LandingPageSplash;
