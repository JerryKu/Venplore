import React from 'react';

class EventCreator extends React.Component {
  constructor(){
    super();
  }
  render(){
    return <div className='event-creation'>
      <form>
        <label> Activity Name:<input type='text' name='Activity Name' /> </label> <br />
        <label> Image: <input type='text' name='Image' /> </label> <br />
        <label> Description: <input type='text' name='Description' /> </label> <br />
        <label> Cost: <input type='text' name='Cost' /> </label> <br />
        <label> Physical Effort: <input type='text' name='Physical Effort' /> </label> <br />
        <label> Mental Effort: <input type='text' name='Mental Effort' /> </label> <br />
        <label> Duration: <input type='text' name='Duration' /> </label> <br />
        <input type='submit' value='Submit' />
      </form>
    </div>;
  }
}

export default EventCreator;
