import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul className='header-bar'>
        <li>Venplore - Venture, and Explore!</li>
        <li> <Link to='/' className='header-tab'>Home</Link> </li>
        <li> <Link to='/create' className='header-tab'>Create an activity </Link> </li>
        <li> <Link to='/about' className='header-tab'>About Us</Link> </li>
      </ul>
    );
  }
}

export default HeaderBar;
