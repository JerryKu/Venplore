import React from 'react';

const PersonalDescription = (props) => {
  return <div className="info-bar box-shadow-container">
      <div>
        <div className='section-title'>Andrew Chen</div>
        <img src="https://i.imgur.com/iflBcBK.png" />
        <div className='primary-title blue' >Welcome to Venplore!</div>
        <p>
          Venplore is a platform that aims to kill bordeom, forever. On
          Venplore you can find an activity that matches your current mood as
          closely as possibly and upload your own for others to try out. The
          only limit is your imagination!
        </p>
        <p>
          As a creative problem solver, I am always looking for harder
          challenges to conquer. Feel free to reach out if you have any
          suggestions for Venplore or would like to help out!
        </p>
        <div className="secondary-title-green" >andrewchen.c44@gmail.com</div>
        <a className="code-link" href="https://github.com/andrewchen44/Venplore" target="_blank">
          Link to Code
        </a>
      </div>
    </div>;
};

export default PersonalDescription;