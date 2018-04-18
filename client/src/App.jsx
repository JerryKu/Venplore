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
        this.props.dispatch(actions.updateActivityList(activities.data, this.props.filters))
        this.props.dispatch(actions.setActivity(this.props.activityList[0]));

      })
    }
    
    render () {
      return <div className="application">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ActivityFinder} />
            <Route path="/create" component={EventCreator} />
            <Route path='/created' component={PostCreation} />
            <Route path="/about" component={About} />
          </Switch>
        </div>;
    }
  }

const mapStateToProps = (state) => {
  return{
    filters: state.filters,
    activityList: state.activityList,
  }
}

const ConnectedApp = withRouter(
  connect(mapStateToProps)(App)
);
  
export default ConnectedApp;
