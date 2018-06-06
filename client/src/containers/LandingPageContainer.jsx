import React, { Component } from 'react';
import LandingPage from '../components/landingPage/LandingPage.jsx';
import FeaturedActivities from '../components/landingPage/featuredActivities.jsx';
import FooterBar from '../components/navigating/FooterBar.jsx';

class LandingPageContainer extends Component {

  render() {
    return (
      <div className="grid-full">
        <div className="grid-root landingPageContainer">
          <LandingPage />
          <FeaturedActivities/>
        </div>
        <FooterBar className='grid-full'/>
      </div>
    );
  }

}

export default LandingPageContainer;
