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
