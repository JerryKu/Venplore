import React from "react";

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
          Home
        </li>
        <li style={{display:"inline-block", padding:'0 1%'}}>
          About The Creators
        </li>
      </ul>
		</div>
    );
  }
}

export default HeaderBar;
