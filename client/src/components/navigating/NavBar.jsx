import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const HeaderBar = (props) => {
  return (
    <div className='header-bar'>
      <NavLink to='/' className='header-tab'>Venplore - Venture, and Explore!</NavLink>
      <NavLink activeClassName="selected" exact to='/' className='header-tab'>Home</NavLink>
      <NavLink activeClassName="selected" exact to='/create' className='header-tab'>Create an activity </NavLink>
      <NavLink activeClassName="selected" exact to='/about' className='header-tab'>About</NavLink> 
    </div>
  );
}

export default HeaderBar;
