import React from "react";

class FilterSlider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span className='filter-slider'>
         <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
      </span>;
  }
}

export default FilterSlider;
