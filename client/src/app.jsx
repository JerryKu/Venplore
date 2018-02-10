import React from "react";
import { Switch, Route } from "react-router-dom";
import currentActivity from "./components/currentActivity.jsx";

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Venplore</h1>
      </div>
      
      <currentActivity/>
    )
  }
}

export default App;