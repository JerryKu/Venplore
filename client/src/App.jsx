import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import actions from './actions/index.jsx'
import HeaderBar from './components/navigating/HeaderBar.jsx';
import EventCreator from './components/eventCreating/EventCreator.jsx';
import ActivityFinder from './components/activityFinding/ActivityFinder.jsx';
import PostCreation from './components/eventCreating/PostCreation.jsx';
import About from './components/describing/About.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      axios.get('/event/finding', {
        params: {
          name: 'test',
        }
      }).then((activities) =>{
        console.log(this.props);
        this.props.setActivityList(activities);
      })
    }
    render () {
      return <div className="application">
          <HeaderBar />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={ActivityFinder} />
              <Route path="/create" component={EventCreator} />
              <Route path='/created' component={PostCreation} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>;
    }
  }

const setList = dispatch => {
  return {
    setActivityList: (list) => {
      dispatch(actions.setActivityList(list));
    }
  };
};

const ConnectedApp = connect(setList)(App);
  
export default ConnectedApp;
