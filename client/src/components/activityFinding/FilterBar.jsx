import React from "react";
import actions from '../../actions/index.jsx'
import SearchBar from './SearchBar.jsx'

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
        <SearchBar {...this.props}/>
        <div className="primary-title text-orange" >Filters:</div>
        {(this.props.searchVal !== "") ? <div>Current Search: {this.props.searchVal}</div> : null}
        {this.props.filters.map((filter, index) => {
          return <div className='filter-container' key={index}>
              <div className='text-orange'>
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
        <div className='filter-container'>
          <button className="clear-filter-button text-orange" onClick={this.clearFilters}>Clear Filters</button>
        </div>

      </div>
    )
  }
}

export default FilterBar;
