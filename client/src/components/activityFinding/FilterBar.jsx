import React from "react";
import { connect } from "react-redux";
import actions from '../../actions/index.jsx'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="filter-categories">
      {this.props.filters.map((filter, index) => {
        return (<div key={index}>
          <div>
            {filter[0]}: {filter[1]}
          </div>
           <div>
            <input type='range' min='0' max='5' step='1' defaultValue={filter[1]} onChange={(e) => {
                this.props.setFilterValue(filter[0], e.target.value);
              }} onMouseUp={() => {this.props.updateActivityList(this.props.activityList, this.props.filters)}}/>
           </div>
        </div>)
      })}
      </div>;
  }
}

const mapStateToProps = state => {
  return { 
    filters: state.filters,
    activityList: state.activityList, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterValue: (index, value) => {
      dispatch(actions.setFilterValue(index, value));
    },
    updateActivityList: (list, filters) => {
      dispatch(actions.updateActivityList(list, filters));
    }
  };
};

const ConnectedFilterBar = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default ConnectedFilterBar;