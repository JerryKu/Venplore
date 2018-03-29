import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar.jsx';
import EventCreator from './components/EventCreator.jsx';
import ActivityFinder from './components/ActivityFinder.jsx';

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return <div className='activity-section'>
        <div className='header-bar'> <HeaderBar /> </div>
        <Switch>
          <Route exact path='/' component={ActivityFinder}/>  
          <Route path='/create' component={EventCreator}/>
        </Switch>
        </div>;
    }
  }

export default App;
