import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import CurrentActivity from './components/CurrentActivity.jsx';
// import FilterBar from './components/FilterBar.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import ActivitiesList from './components/ActivitiesList.jsx';
import HeaderBar from './components/HeaderBar.jsx';
import EventCreator from './components/EventCreator.jsx';
import ActivityFinder from './components/ActivityFinder.jsx';

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return <div className='activity-section'>
        <div className='header-bar'>
          <HeaderBar />
        </div>
        <Switch>
          <Route exact path='/' component={ActivityFinder}/>  
          <Route path='/create' component={EventCreator}/>
        </Switch>

          {/* <div className='filter-section'>
            <div>
              <SearchBar />
            </div>
            <div>
              <FilterBar />
            </div>
          </div>
          <div className='activity-list-section'>
          <ActivitiesList />
          </div>
          <div className='current-activity-section'>
            <CurrentActivity />
          </div> */}
        </div>;
    }
  }

export default App;
