import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderBar from './components/navigating/HeaderBar.jsx';
import EventCreator from './components/eventCreating/EventCreator.jsx';
import ActivityFinder from './components/activityFinding/ActivityFinder.jsx';
import About from './components/describing/About.jsx'

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return <div className="application">
          <HeaderBar />
          <div className="main-content">
            <Switch>
              <Route path="/" component={EventCreator} />

              <Route exact path="/" component={ActivityFinder} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>;
    }
  }

export default App;
