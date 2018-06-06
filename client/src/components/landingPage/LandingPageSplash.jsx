import React, { Component } from 'react';
import Flickity from 'flickity';
import BottomIcon from '../../assets/BottomIcon.png'

class LandingPageSplash extends Component {
  componentDidMount(){
    let elem = document.querySelector('.main-carousel');
    let flckty = new Flickity(elem, {
      fullscreen: true,
    })
  }
  render() {
    return (
      <div className="welcomeScreen grid-full">
        <div className="landingPage relative">
            <img className="featuredImage" src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg"/>
            <div className="welcomeMessage">Welcome to Venplore!</div>
            <img className="bottomIcon absolute" src={BottomIcon}/>
        </div>
      </div>
    );
  }

}

export default LandingPageSplash;
