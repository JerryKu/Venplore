import React from 'react';
import CurrentActivity from './components/CurrentActivity.jsx'
import FilterBar from './components/FilterBar.jsx'
import SearchBar from './components/SearchBar.jsx'
import ActivitiesList from './components/ActivitiesList.jsx'
import HeaderBar from './components/HeaderBar.jsx'

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return <div className="activity-section">
        <div className="header-bar">
          <HeaderBar />
        </div>
          <div className="filter-section">
            <div>
              <SearchBar />
            </div>
            <div>
              <FilterBar />
            </div>
          </div>
          <div className="activity-list-section">
          <ActivitiesList />
          </div>
          <div className="current-activity-section">
            <CurrentActivity />
          </div>
        </div>;
    }
  }

export default App;
