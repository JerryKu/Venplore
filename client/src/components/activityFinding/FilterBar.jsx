import React from "react";
import { connect } from "react-redux";
import actions from '../../actions/index.jsx'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span className="filter-categories">
      {this.props.filters.map((filter, index) => {
        return <div key={index}>
           {filter[0]}: {filter[1]} 
           <input type='range' min='0' max='5' step='1' onChange={(e) => {
            this.props.setFilterValue(filter[0], e.target.value);
          }}/>
        </div>
      })}
      </span>;
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterValue: (index, value) => {
      dispatch(actions.setFilterValue(index, value));
    }
  };
};

const ConnectedFilterBar = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default ConnectedFilterBar;