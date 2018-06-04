import React from "react";
import actions from '../../actions/index.jsx'

const FilterBar = (props) =>{
  return <div className="filter-section">
      <div className="primary-title-blue" >What are you in the mood for?</div>
      {props.filters.map((filter, index) => {
        return <div key={index}>
            <div>
              {filter[0]}: {filter[2]}
            </div>
            <div>
              <input type="range" min="0" max="5" step="1" defaultValue={filter[2]} onChange={e => {
                  props.setFilterValue(filter[0], e.target.value);
                }} onMouseUp={() => {
                  props.updateActivityList(props.activityList, props.filters);
                }} />
            </div>
          </div>;
      })}
    </div>;
}

export default FilterBar;