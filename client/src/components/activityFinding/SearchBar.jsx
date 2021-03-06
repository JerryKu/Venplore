import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      inputValue: ''
    }
  }
  onSubmit(evt){
    evt.preventDefault();
    console.log(this.props.searchActivityList)
    this.props.searchActivityList(this.props.allActivities, this.state.inputValue);
    this.props.setSearchVal(this.state.inputValue);
    if(this.props.history[this.props.history.length-1] !== '/finding'){
        this.props.history.push('/finding');
    }
    window.scrollTo(0, 0)
    this.setState({
      inputValue: '',
    })
  }
  updateInputValue(evt){
    this.setState({
      inputValue: evt.target.value
    });
  }
  render() {
    return (
      <div className="search-bar content-container">
        <form className="search-form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Search for activities..." value={this.state.inputValue} onChange={this.updateInputValue}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
