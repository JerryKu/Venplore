import React from 'react';
import CurrentActivity from './components/CurrentActivity.jsx'
import FilterBar from './components/FilterBar.jsx'
import SearchBar from './components/SearchBar.jsx'

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return (
      <div className='activity-section'>
        <SearchBar/>
        <FilterBar/>
        <CurrentActivity/>
      </div>
      )
    }
  }

export default App;