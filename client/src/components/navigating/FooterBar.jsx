import React, { Component } from 'react';
import BottomIcon from '../../assets/BottomIcon.png';

class FooterBar extends Component {

  render() {
    return (
      <div>
        <div className="contact-us">Venplore | About Us</div>
        <img className="footerBar" src={BottomIcon}/>
      </div>
    );
  }

}

export default FooterBar;
