import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { setCreationState } from '../../actions/creationActions.js';
import VenploreLogo from '../../assets/Venplore-Logo.png';
import { slide as Menu } from 'react-burger-menu';

class HeaderBar extends React.Component{
  constructor(props){
    super(props);
    this.createActivity = this.createActivity.bind(this);
    this.state= {
      menuOpen:false
    }
  }
  closeMenu(){
    this.setState({menuOpen: false})
  }
  createActivity(){
    this.props.dispatch(setCreationState('creating'));
    this.closeMenu();
  }
  render(){
    return (
          <div className="header-bar grid-full">
          {document.body.clientWidth > 1023 ?
            <div className='header-links'>
              <div className="header-tab header-city">My City: San Jose</div>
              <NavLink exact to='/' className='vp-logo'><img src={VenploreLogo}/></NavLink>
              <NavLink activeClassName="selected" exact to='/' className='header-tab nav-links'> <span>Home</span></NavLink>
              <NavLink activeClassName="selected" exact to='/finding' className='header-tab nav-links'> <span>Explore</span></NavLink>
              <div onClick={this.createActivity} className='header-tab nav-links'> <span>Create</span> </div>
              {/* <NavLink activeClassName="selected" exact to='/login' className='header-tab'> <span>Login</span></NavLink>
              <NavLink activeClassName="selected" exact to='/signup' className='header-tab'> <span>Sign Up</span></NavLink>
              */}
            </div>
          :
            <div className="mobile-header-bar">
              <Menu right isOpen={this.state.menuOpen} width= { '200px' }>
                <NavLink activeClassName="selected" exact to='/' className='header-tab nav-links'> <span>Home</span></NavLink>
                <NavLink activeClassName="selected" exact to='/finding' className='header-tab nav-links'> <span>Explore</span></NavLink>
                <div onClick={this.createActivity} className='header-tab nav-links'> <span>Create</span> </div>
              </Menu>
            </div>
          }
        </div>
    );
  }
}

export default HeaderBar;
