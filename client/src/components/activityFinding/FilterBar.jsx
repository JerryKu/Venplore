import React from "react";
import actions from '../../actions/index.jsx'

class FilterBar extends React.Component{
  constructor(props){
    super(props);
    this.clearFilters = this.clearFilters.bind(this);
  }
  clearFilters(){
    this.props.filters.forEach((filter)=>{
      filter[2] = 0;
    })
    this.props.updateActivityList(this.props.allActivities, this.props.filters);
    this.props.setSearchVal("");
  }
  render(){
    return (
      <div className="filter-section">
        <div className="primary-title-blue" >What are you in the mood for?</div>
        {this.props.filters.map((filter, index) => {
          return <div key={index}>
              <div>
                {filter[0]}: {filter[2]}
              </div>
              <div>
                <input type="range" min="0" max="5" step="1" value={filter[2]} onChange={e => {
                    this.props.setFilterValue(filter[0], e.target.value);
                  }} onMouseUp={() => {
                    this.props.updateActivityList(this.props.activityList, this.props.filters);
                  }} />
              </div>
            </div>;
        })}
        <div>Current Search: {this.props.searchVal}</div>
        <button className="clear-filter-button" onClick={this.clearFilters}>Clear Filters</button>
      </div>
    )
  }
}

export default FilterBar;
