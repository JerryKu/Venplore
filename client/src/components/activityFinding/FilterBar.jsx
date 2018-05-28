import React from "react";
import { connect } from "react-redux";
import actions from '../../actions/index.jsx'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="filter-section">
        <div className="primary-title-blue" >Activity Filters</div>
        {this.props.filters.map((filter, index) => {
          return <div key={index}>
              <div>
                {filter[0]}: {filter[2]}
              </div>
              <div>
                <input type="range" min="0" max="5" step="1" defaultValue={filter[2]} onChange={e => {
                    this.props.setFilterValue(filter[0], e.target.value);
                  }} onMouseUp={() => {
                    this.props.updateActivityList(this.props.activityList, this.props.filters);
                  }} />
              </div>
            </div>;
        })}
      </div>;
  }
}

export default FilterBar;