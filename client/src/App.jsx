import React from 'react';
import CurrentActivity from './components/CurrentActivity.jsx'

class App extends React.Component {
    constructor() {
      super();
    }
    render () {
      return (
      <div>
        tests
        <CurrentActivity />
      </div>
      )
    }
  }

export default App;