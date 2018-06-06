<<<<<<< HEAD
import React from 'react';
import LandingPageSplash from './LandingPageSplash.jsx';
import FeaturedActivities from './featuredActivities.jsx';
import FooterBar from '../navigating/FooterBar.jsx';
import ActivityCreatorContainer from '../../containers/ActivityCreatorContainer.jsx';

const LandingPageContainer = (props) => {
  return (
    <div className="grid-full">
      <div className="grid-root landingPageContainer">
        <LandingPageSplash />
        <FeaturedActivities {...props}/>
      </div>
      <FooterBar className='grid-full'/>
      <div>{props.createActivity === 'creating' ? <ActivityCreatorContainer /> : null}</div>
    </div>
  );
}

export default LandingPageContainer;
=======
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
>>>>>>> started landing page, added landing page css, added url-loader for images
