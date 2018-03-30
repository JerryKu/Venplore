import React from 'react';

class EventCreator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'test',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    console.log(event );
    event.preventDefault();
  }

  render(){
    return <div className='event-creation'>
      <form>
        <label> Activity Name:<input type='text' value={this.state.value} name='Activity Name' /> </label> <br />
        <label> Image: <input type='text' name='Image' /> </label> <br />
        <label> Description: <input type='text' name='Description' /> </label> <br />
        <label> Cost: <input type='text' name='Cost' /> </label> <br />
        <label> Physical Effort: <input type='text' name='Physical Effort' /> </label> <br />
        <label> Mental Effort: <input type='text' name='Mental Effort' /> </label> <br />
        <label> Duration: <input type='text' name='Duration' /> </label> <br />
        <input type='submit' value='Submit' onClick={this.handleSubmit}/>
      </form>
    </div>
  }
}

export default EventCreator;
