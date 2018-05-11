import React from 'react';

const PersonalDescription = (props) => {
  return <div className="info-bar">
      <div>
        <h2 style={{ fontSize: "2em" }}>Andrew Chen</h2>
        <img src="https://i.imgur.com/iflBcBK.png" />
        <h3>Welcome to Venplore!</h3>
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
        <h4>andrewchen.c44@gmail.com</h4>

        <a href="https://github.com/andrewchen44/Venplore" target="_blank">
          {" "}
          Link to Code{" "}
        </a>
      </div>
    </div>;
};

export default PersonalDescription;