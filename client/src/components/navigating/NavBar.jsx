import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const HeaderBar = (props) => {
  return (
    <div className='header-bar'>
      <NavLink to='/' className='header-tab'>Venplore - Venture, and Explore!</NavLink>
      <NavLink activeClassName="selected" exact to='/' className='header-tab'> <span> Home</span></NavLink>
      <NavLink activeClassName="selected" exact to='/' className='header-tab'> <span>Create an activity</span> </NavLink>
      <NavLink activeClassName="selected" exact to='/about' className='header-tab'> <span>About</span></NavLink> 
    </div>
  );
}

export default HeaderBar;
