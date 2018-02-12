import React from "react";
import { Switch, Route } from "react-router-dom";
import UserProfile from "./Components/UserProfile.jsx";
import ArtistProfile from "./Components/ArtistProfile.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Fishing</h1>
      </div>
    );
  }
}

export default currentActivity;
