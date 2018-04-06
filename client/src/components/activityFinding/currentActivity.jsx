// refactir into stateless functional component 

import React from "react";
import { connect } from "react-redux"

class CurrentActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>
        <div className="main-image-section">
          <img className="main-image" src={this.props.image} style={{maxWidth:'70%', maxHeight:'70%'}}/>
        </div>
        <div className="description-section">{this.props.description}</div>
      </span>;
  }
}


const mapStateToProps = state => {
  return {
    image: state.currentActivity.image,
    description: state.currentActivity.description,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // createBook: book => dispatch(bookActions.createBook(book))
  }
};

const ConnectedCurrentActivity = connect(mapStateToProps, mapDispatchToProps)(CurrentActivity);

export default ConnectedCurrentActivity;