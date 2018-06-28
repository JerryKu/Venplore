import React from "react";
import actions from '../../actions/index.jsx'
import SearchBar from './SearchBar.jsx'
import Slider from 'react-rangeslider'

class FilterBar extends React.Component{
  constructor(props){
    super(props);
    this.clearFilters = this.clearFilters.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }
  clearFilters(){
    this.props.filters.forEach((filter)=>{
      filter[2] = 0;
    })
    this.props.updateActivityList(this.props.allActivities, this.props.filters);
    this.props.setSearchVal("");
  }

  handleChange(filter, e){
    this.props.setFilterValue(filter, e);
  }

  handleChangeComplete() {
    this.props.updateActivityList(this.props.activityList, this.props.filters);
  }

  render(){
    const min = 1;
    const max = 5;
    const prompts = ['How much would you like to spend?', 'How hard do you want to think?', 'How intense of a workout do you want?', 'How much nature do you want to see?', 'How much do you want to interact with other people?', 'How much time do you have?']
    return (
      <div className="filter-section">
        <SearchBar {...this.props}/>
        <div className="primary-title text-orange" >Filters:</div>
        {(this.props.searchVal !== "") ? <div className='content-container'>Current Search: {this.props.searchVal}</div> : null}
        {this.props.filters.map((filter, index) => {
          const value = filter[2];
          return <div className='filter-container' key={index}>
              <div className='text-orange filter-title'>
                {filter[0]}:
                <span className='float-right'>{filter[2]}</span>
              </div>
              <div className='slider-container'>
                <div className='text-small text-orange text-center'>
                  {prompts[index]}
                </div>
                <Slider
                  min={min}
                  max={max}
                  value={value}
                  orientation="horizontal"
                  onChange={this.handleChange.bind(this, filter[0])}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
            </div>;
        })}
        <div className='text-center'>
          <button className="clear-filter-button text-orange" onClick={this.clearFilters}>Clear Filters</button>
        </div>

      </div>
    )
  }
}

export default FilterBar;
