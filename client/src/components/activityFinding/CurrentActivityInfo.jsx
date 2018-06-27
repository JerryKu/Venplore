import React from 'react';

const CurrentActivityInfo = (props) => {
  return (
    <div className='current-activity-info'>
        <div className="content-container text-large text-orange activity-title">
        {props.eventInfo.name}
        </div>
      <div className="main-image content-container">
        <img src={props.eventInfo.imageLink} />
      </div>
      <div className="current-event-description content-container">
        {props.eventInfo.description}
      </div>
    </div>
  )
}

export default CurrentActivityInfo;