import React from "react";

class FilterButtons extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </span>;
  }
}

export default FilterButtons;
