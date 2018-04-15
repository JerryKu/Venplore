import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';  
import { Switch, Route } from 'react-router-dom';
import actions from './actions/index.jsx'
import NavBar from './components/navigating/NavBar.jsx';
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
        this.props.dispatch(actions.setActivityList(activities.data));
        this.props.dispatch(actions.setActivity(activities.data[0]));

      })
    }
    render () {
      return <div className="application">
          <NavBar />
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

const ConnectedApp = withRouter(
  connect()(App)
);
  
export default ConnectedApp;
