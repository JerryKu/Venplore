import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import actions from './actions/index.jsx'
import NavbarContainer from './containers/NavbarContainer.jsx';
import EventCreator from './components/eventCreating/EventCreator.jsx';
import ActivityFinderContainer from './containers/ActivityFinderContainer.jsx';
import PostCreation from './components/eventCreating/PostCreation.jsx';
import LandingPageContainer from './containers/LandingPageContainer.jsx';
import About from './components/describing/About.jsx';
import Login from './components/authenticating/Login.jsx';
import SignUp from './components/authenticating/SignUp.jsx';

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
        this.props.dispatch(actions.setAllActivityList(activities.data))
        this.props.dispatch(actions.updateActivityList(activities.data, this.props.filters))
      })
    }

    render () {
      return <div className="application">
          <NavbarContainer />
          <Switch>
            <Route exact path="/" component={LandingPageContainer}/>
            <Route path="/finding" component={ActivityFinderContainer} />
            <Route path="/about" component={About} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>;
    }
  }

const mapStateToProps = (state) => {
  return{
    filters: state.filters,
    activityList: state.activityList,
    allActivities: state.allActivities,
    searchVal: state.searchVal,
  }
}

const ConnectedApp = withRouter(
  connect(mapStateToProps)(App)
);

export default ConnectedApp;
