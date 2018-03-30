import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
		<div>
      <ul style={{listStyleType:'none', padding:'0 1%'}}>
        <li style={{float:'left', padding:'0 1%'}}>
          Venplore - Venture, and Explore!
        </li>
        <li style={{display:"inline-block", padding:'0 1%'}}>
          <Link to='/' className='header-tab'>Home</Link>
        </li>
        <li>
          <Link to='/create' className='header-tab'>Create an Event</Link>
        </li>
        <li style={{display:"inline-block", padding:'0 1%'}}>
          <Link to='/about' className='header-tab'>About Us</Link>
        </li>
      </ul>
		</div>
    );
  }
}

export default HeaderBar;
