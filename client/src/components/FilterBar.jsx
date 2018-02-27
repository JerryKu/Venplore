import React from "react";

class FilterBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span>
        filter bar
        <div>Price:</div>
        <div>Mental Effort:</div>
        <div>Physical Effort:</div>
        <div>Nature Level:</div>
        <div>Indoors Level:</div>
        <div>Duration:</div>
      </span>;
  }
}

export default FilterBar;