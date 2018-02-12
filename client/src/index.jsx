
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


class App extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (<div> test
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));