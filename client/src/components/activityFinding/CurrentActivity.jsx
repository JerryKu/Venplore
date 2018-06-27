import React from "react";
import CurrentActivityInfo from './CurrentActivityInfo.jsx';
import CurrentActivityRatings from './CurrentActivityRatings.jsx';

const CurrentActivity = (props) => {
  const handleHide = () => {
    props.hideCurrent();
  };
    return (
    <div className="current-activity-section grid-root grid-row-root">
      <button className='orange-button back-button' onClick={handleHide}> Choose Another Adventure
      </button>
      <CurrentActivityInfo eventInfo={props.eventInfo}/>
      <CurrentActivityRatings eventRatings={props.eventRatings} />
    </div>);
}

export default CurrentActivity;
