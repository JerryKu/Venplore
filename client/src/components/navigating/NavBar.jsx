import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { setCreationState } from '../../actions/creationActions.js'

const HeaderBar = ({ dispatch} ) => {
  const createActivity = () => {
    dispatch(setCreationState('creating'));
  }
  return (
    <div className='header-bar'>
      <NavLink to='/' className='header-tab'>Venplore - Venture, and Explore!</NavLink>
      <NavLink activeClassName="selected" exact to='/' className='header-tab'> <span> Home</span></NavLink>
      <div onClick={createActivity} className='header-tab'> <span>Create an activity</span> </div>
      <NavLink activeClassName="selected" exact to='/about' className='header-tab'> <span>About</span></NavLink>
      <NavLink activeClassName="selected" exact to='/login' className='header-tab'> <span>Login</span></NavLink>
      <NavLink activeClassName="selected" exact to='/signup' className='header-tab'> <span>Sign Up</span></NavLink> 
    </div>
  );
}

export default HeaderBar;
