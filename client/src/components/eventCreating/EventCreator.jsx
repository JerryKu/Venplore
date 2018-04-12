import React from 'react';

class EventCreator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        activityName: '',
        imageLink: '',
        overallEnjoyability: 5,
        cost: 1,
        mentalEffort: 1,
        physicalEffort: 1,
        natureLevel: 5,
        socialLevel: 3,
        duration: 5,
        description: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render(){
    return <div style={{ height: "100%" }}>
        <form className="event-creation">
          <label>
            Activity Name: <input type="text" name="activityName" placeholder="Fishing" value={this.state.activityName} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Image Link: <input type="text" name="imageLink" value={this.state.imageLink}placeholder="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,q_65,w_768/v1/clients/norway/Fishing_2152634f-ba23-4044-8145-6ec3bab642bf.png"  onChange={this.handleChange}/>
          </label> <br />
          <label>
            Overall Enjoyability: <input type="range" min="0" max="5" step="1" name='overallEnjoyability' value={this.state.overallEnjoyability} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Cost: {this.state.cost} <input type="range" min="0" max="5" step="1" name='cost' value={this.state.cost} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Mental Effort: {this.state.mentalEffort}<input type="range" min="0" max="5" step="1" name='mentalEffort' value={this.state.mentalEffort} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Physical Effort: {this.state.physicalEffort} <input type="range" min="0" max="5" step="1" name='physicalEffort' value={this.state.physicalEffort} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Nature Level: {this.state.natureLevel} <input type="range" min="0" max="5" step="1" name='natureLevel' value={this.state.natureLevel} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Social Level: {this.state.socialLevel}<input type="range" min="0" max="5" step="1" name='socialLevel' value={this.state.socialLevel} onChange={this.handleChange}/>
          </label> <br />
          <label>
            Duration: {this.state.duration}<input type="range" min="0" max="5" step="1" name='duration' value={this.state.duration} onChange={this.handleChange}/>
          </label> <br />
          <label style={{ height: "20%" }}>
            Description: 
            <div>
              <textarea rows='4' cols='100' className='description-box' name="description" value={this.state.description} placeholder='All you need is a chair and fishing rod to enjoy hours of relaxation by your favorite body of water.'  onChange={this.handleChange}/>
            </div>
          </label> <br />
          <input className="create-button" type="submit" value="Create Adventure" />
        </form>
      </div>;
  }
}

export default EventCreator;
