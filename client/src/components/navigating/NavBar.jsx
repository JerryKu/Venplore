import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { setCreationState } from '../../actions/creationActions.js';
import VenploreLogo from '../../assets/Venplore-Logo.png';

const HeaderBar = ({ dispatch} ) => {
  const createActivity = () => {
    dispatch(setCreationState('creating'));
  }
  return (
    <div className="grid-full">
      {document.body.clientWidth >= 1024 ?
        <div className="header-bar">
          <div className='header-links'>
            <div className="header-tab header-city">My City: San Jose</div>
            <NavLink exact to='/' className='vp-logo'><img src={VenploreLogo}/></NavLink>
            <NavLink activeClassName="selected" exact to='/' className='header-tab nav-links'> <span>Home</span></NavLink>
            <NavLink activeClassName="selected" exact to='/finding' className='header-tab nav-links'> <span>Explore</span></NavLink>
            <div onClick={createActivity} className='header-tab nav-links'> <span>Create</span> </div>
            {/* <NavLink activeClassName="selected" exact to='/login' className='header-tab'> <span>Login</span></NavLink>
            <NavLink activeClassName="selected" exact to='/signup' className='header-tab'> <span>Sign Up</span></NavLink>
            */}
          </div>
        </div>
        :
        <div className="mobile-header-bar">
          <img className="absolute" src={VenploreLogo}/>
        </div>
      }
    </div>
  );
}

export default HeaderBar;
