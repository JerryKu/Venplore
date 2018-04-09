import React from "react";
import FilterSlider from "./FilterSlider.jsx";

class FilterBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span className="filter-categories">
        <div>
          Overall Ejoyability: <FilterSlider />
        </div>
        <div>
          Price: <FilterSlider />
        </div>
        <div>
          Mental Effort: <FilterSlider />
        </div>
        <div>
          Physical Effort: <FilterSlider />
        </div>
        <div>
          Nature Level: <FilterSlider />
        </div>
        <div>
          Social level: <FilterSlider />
        </div>
        <div>
          Duration: <FilterSlider />
        </div>
      </span>;
  }
}

export default FilterBar;