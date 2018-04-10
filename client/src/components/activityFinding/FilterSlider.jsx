import React from 'react';

class FilterSlider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span className='filter-slider'>
          <input type='range' min='0' max='5' id='myRange' step='1'/>
      </span>;
  }
}

export default FilterSlider;
