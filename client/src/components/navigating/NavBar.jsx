import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HeaderBar = (props) => {
  return (
    <div className='header-bar'>
      <Link to='/' className='header-tab'>Venplore - Venture, and Explore!</Link>
      <Link to='/' className='header-tab'>Home</Link>
      <Link to='/create' className='header-tab'>Create an activity </Link>
      <Link to='/about' className='header-tab'>About</Link> 
    </div>
  );
}

export default HeaderBar;
