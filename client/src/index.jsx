import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import venplore from './reducers/index.jsx';
import App from './App.jsx'

const store = createStore(venplore);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>  
  </Router>,
  document.getElementById("app")
);
