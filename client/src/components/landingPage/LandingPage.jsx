import React, { Component } from 'react';
import LandingPageSplash from './LandingPageSplash.jsx';
import FeaturedActivities from './featuredActivities.jsx';
import FooterBar from '../navigating/FooterBar.jsx';
import ActivityCreatorContainer from '../../containers/ActivityCreatorContainer.jsx';

class LandingPageContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="grid-full">
        <div className="grid-root landingPageContainer">
          <LandingPageSplash />
          <FeaturedActivities/>
        </div>
        <FooterBar className='grid-full'/>
        <div>{this.props.createActivity === 'creating' ? <ActivityCreatorContainer /> : null}</div>
      </div>
    );
  }

}

export default LandingPageContainer;
