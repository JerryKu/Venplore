import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='header-bar'>
        <Link to='/' className='header-tab'>Venplore - Venture, and Explore!</Link>
        <Link to='/create' className='header-tab'>Create an activity </Link>
        <Link to='/about' className='header-tab'>About Us</Link> 
      </div>
    );
  }
}

export default HeaderBar;
