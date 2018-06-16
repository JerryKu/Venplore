import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navigating/NavBar.jsx';

const NavbarContainer = props => (
  <Navbar {...props} />
);

export default connect(null, null, null, {pure: false})(NavbarContainer);
