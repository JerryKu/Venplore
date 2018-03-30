import React from "react";
import FilterButtons from './FilterButtons.jsx'

class FilterBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span>
        <div>
          Price: <FilterButtons />
        </div>
        <div>
          Mental Effort: <FilterButtons />
        </div>
        <div>
          Physical Effort: <FilterButtons />
        </div>
        <div>
          Nature Level: <FilterButtons />
        </div>
        <div>
          Indoors Level: <FilterButtons />
        </div>
        <div>
          Duration: <FilterButtons />
        </div>
      </span>;
  }
}

export default FilterBar;