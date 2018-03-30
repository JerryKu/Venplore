import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderBar from './components/navigating/HeaderBar.jsx';
import EventCreator from './components/eventCreating/EventCreator.jsx';
import ActivityFinder from './components/activityFinding/ActivityFinder.jsx';

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
