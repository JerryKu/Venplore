import React from 'react';
import axios from 'axios';
import RadioButtons from './RadioButtons.jsx';
import { setCreationState } from '../../actions/creationActions';


class EventCreator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        activityName: '',
        imageLink: '',
        overallEnjoyability: 0,
        cost: 0,
        mentalEffort: 0,
        physicalEffort: 0,
        natureLevel: 0,
        socialLevel: 0,
        duration: 0,
        description: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeCreator = this.closeCreator.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount(){
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  compoenentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.dispatch(setCreationState('!creating'));
    }
  }
  handleChange(filter, event){
    let newState = {};
    newState[filter] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event){
    axios.post('/event/creation', {
      activityName: this.state.activityName,
      imageLink: this.state.imageLink,
      overallEnjoyability: this.state.overallEnjoyability,
      cost: this.state.cost,
      mentalEffort: this.state.mentalEffort,
      physicalEffort: this.state.physicalEffort,
      natureLevel: this.state.natureLevel,
      socialLevel: this.state.socialLevel,
      duration: this.state.duration,
      description: this.state.description,
    })
    .then(function (response) {
    console.log(response);
   })
   .catch(function (error) {
    console.log(error);
    });
  }

  closeCreator(){
    this.props.dispatch(setCreationState('!creating'));
  }

  render(){
    const options = [0,1,2,3,4,5];
    return <div className="event-creation-section">
        <div className="dark-background" />
        <div ref={this.setWrapperRef} className="event-creation-form">
          <button className="close-button" onClick={this.closeCreator}>
            X
          </button>
          <div className="form-elements">
            <form>
              <div>
                <label>
                  Activity Name: <input className="event-creator-input" type="text" name="activityName" placeholder="Add clear and descriptive activity name" value={this.state.activityName} onChange={this.handleChange} />
                </label> <br />
                <br />
                <label>
                  Image Link: <input className="event-creator-input" type="text" name="imageLink" value={this.state.imageLink} placeholder="Add a link to an image of the activity" onChange={this.handleChange} />
                </label> <br />
              </div>

              <div>
                <div className="event-creator-form-spec">
                  {this.props.filters.map((filter) => {
                    return (
                      <div className='input-row' key={filter[0]}>
                        <RadioButtons title={filter[0]} filter={filter[1]} options={options} handleChange={this.handleChange}/>
                      </div>
                    )
                  })}
                </div> 
              </div>
              <br />

              <label>
                Description:
                <div>
                  <textarea rows="6" cols="150" className="description-box" name="description" value={this.state.description} placeholder="Tell me more about this activity" onChange={this.handleChange} />
                </div>
              </label> <br />
              <input className="create-button" type="submit" value="Create Adventure" onClick={this.handleSubmit} />
            </form>
          </div>
        </div>
      </div>;
  }
}

export default EventCreator;
