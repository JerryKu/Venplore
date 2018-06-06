import React, { Component } from 'react';
import Flickity from 'flickity';
import BottomIcon from '../../assets/BottomIcon.png'

class LandingPage extends Component {
  componentDidMount(){
    let elem = document.querySelector('.main-carousel');
    let flckty = new Flickity(elem, {
      fullscreen: true,
    })
  }
  render() {
    return (
      <div className="landingPage relative">
        <img className="bottomIcon" src={BottomIcon}/>
        <div className="welcome absolute">Welcome to Venplore!</div>
      </div>

    );
  }

}

export default LandingPage;
