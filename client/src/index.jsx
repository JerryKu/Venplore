
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.jsx';
import App from './App.jsx'
import setActivity from './reducers/activities/actions.jsx'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

console.log(store.getState())

store.dispatch(setActivity({
    image: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg",
    description: 'Adventure Awaits!'
}))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);