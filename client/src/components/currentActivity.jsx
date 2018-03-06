// refactir into stateless functional component 

import React from "react";
import { connect } from "react-redux"

class CurrentActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      image: 'test',
      description: ''
    };
  }
  
  // updateActivity() {
  //   this.setState({
  //     image: store.getState().image,
  //     description: store.getState().description
  //   })
  //   console.log(this.state)
  // }


  render() {
    return <span>
        <div className="main-image-section">
          <img className="main-image" src={this.props.image} alt="adventure" />
        </div>
        <div className="description-section">Adventure Awaits!</div>
      </span>;
  }
}

// Maps state from store to props  that tells how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping.
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books

    image: state.setActivity.image,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    // createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together

const ConnectedCurrentActivity = connect(mapStateToProps, mapDispatchToProps)(CurrentActivity);

export default ConnectedCurrentActivity;