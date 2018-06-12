import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.activityList);
    return (
      <div className="search-bar">
        <form className="search-form">
        <input type="text" placeholder="Search for activities..."/>
        </form>
      </div>
    );
  }

}

export default SearchBar;
