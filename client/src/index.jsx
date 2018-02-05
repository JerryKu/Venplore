
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';
import App from './app.jsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const RenderApp = () => {
    render(
      <Router>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
      </Router>, document.getElementById('app'));
  }
  
  RenderApp();