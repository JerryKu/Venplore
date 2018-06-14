import React from 'react';
import axios from 'axios';
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
  handleChange(event){
    let newState = {};
    newState[event.target.name] = event.target.value;
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
    return (
      <div className='event-creation-section'>
      <div className="dark-background">
      </div>
      <div ref={this.setWrapperRef} className="event-creation-form">
        <button className='close-button' onClick={this.closeCreator}>X</button>
        <div className="form-elements">
          <form>
            <div>
              <label>
                Activity Name: <input type="text" name="activityName" placeholder="Add clear and descriptive activity name" value={this.state.activityName} onChange={this.handleChange}/>
              </label> <br />
              <label>
                Image Link: <input type="text" name="imageLink" value={this.state.imageLink}placeholder="Add a link to an image of the activity"  onChange={this.handleChange}/>
              </label> <br />
            </div>
            <div>
              <div className="event-creator-form-spec">
                Overall Enjoyability: {this.state.overallEnjoyability}<input type="range" min="0" max="5" step="1" name='overallEnjoyability' value={this.state.overallEnjoyability} onChange={this.handleChange}/>
              </div> <br />
              <div className="event-creator-form-spec">
                Cost: {this.state.cost} <input type="range" min="0" max="5" step="1" name='cost' value={this.state.cost} onChange={this.handleChange}/>
              </div> <br />
              <div className="event-creator-form-spec">
                Mental Effort: {this.state.mentalEffort}<input type="range" min="0" max="5" step="1" name='mentalEffort' value={this.state.mentalEffort} onChange={this.handleChange}/>
              </div> <br />
              <div className="event-creator-form-spec">
                Physical Effort: {this.state.physicalEffort} <input type="range" min="0" max="5" step="1" name='physicalEffort' value={this.state.physicalEffort} onChange={this.handleChange}/>
              </div> <br />
              <div className="event-creator-form-spec">
                Nature Level: {this.state.natureLevel} <input type="range" min="0" max="5" step="1" name='natureLevel' value={this.state.natureLevel} onChange={this.handleChange}/>
              </div> <br />
              <div className="event-creator-form-spec">
                Social Level: {this.state.socialLevel}<input type="range" min="0" max="5" step="1" name='socialLevel' value={this.state.socialLevel} onChange={this.handleChange}/>
              </div> <br />
              <div className="event-creator-form-spec">
                Duration: {this.state.duration}<input type="range" min="0" max="5" step="1" name='duration' value={this.state.duration} onChange={this.handleChange}/>
              </div> <br />
            </div>
            <label>
              Description:
              <div>
                <textarea rows='6' cols='150' className='description-box' name="description" value={this.state.description} placeholder='Tell me more about this activity' onChange={this.handleChange}/>
              </div>
            </label> <br />
            <input className="create-button" type="submit" value="Create Adventure" onClick={this.handleSubmit}/>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default EventCreator;
