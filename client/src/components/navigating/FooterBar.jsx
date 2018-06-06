import React, { Component } from 'react';
import BottomIcon from '../../assets/BottomIcon.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class FooterBar extends Component {

  render() {
    return (
      <div>
        <div className="contact-us"> <NavLink to='/' className="footer-tabs">Venplore</NavLink> | <NavLink to='/about' className="footer-tabs">About Us</NavLink></div>
        <img className="footerBar" src={BottomIcon}/>
      </div>
    );
  }

}

export default FooterBar;
