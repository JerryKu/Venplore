import React from 'react';
import CurrentActivity from './components/CurrentActivity.jsx'
import FilterBar from './components/FilterBar.jsx'

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return (
      <div>
        <CurrentActivity/>
        <FilterBar/>
      </div>
      )
    }
  }

export default App;