import React from 'react';

class FilterSlider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span>
          <input type='range' min='0' max='5' step='1' />
      </span>;
  }
}

export default FilterSlider;
