import React from "react";
import { connect } from "react-redux";
import actions from '../../actions/index.jsx'
import Activity from './Activity.jsx'
import axios from 'axios';

class ConnectedActivityList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    axios.get('/event/finding', {
      params: {
        name: 'test',
      }
    }).then((activities) =>{
      console.log(activities);
    })
  }
  render(){
    return <span className="activities-list">
      {this.props.activityList.map((activity, index) => 
        (<span key={index} onClick={() => { 
            this.props.setActivity(activity);
          }}>
          <Activity image={activity.image} description={activity.description}/>
        </span>)
    )}
    </span>;
  }
}

const mapStateToProps = state => {
  return { activityList: state.activityList };
};

const mapDispatchToProps = dispatch => {
  return {
    setActivity: activity => {
      dispatch(actions.setActivity(activity));
    }
  };
};

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(ConnectedActivityList);

export default ActivityList;

