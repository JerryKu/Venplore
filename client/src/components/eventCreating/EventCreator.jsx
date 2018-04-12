import React from 'react';

class EventCreator extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return <div>
      <form  className='event-creation'>
        <label> Activity Name:<input type='text' name='Activity Name' /> </label> <br />
        <label> Image Link: <input type='text' name='Image' /> </label> <br />
        <label> Overall Enjoyability: <input type='text' name='Overall Enjoyability' /> </label> <br />
        <label> Cost: <input type='text' name='Cost' /> </label> <br />
        <label> Mental Effort: <input type='text' name='Mental Effort' /> </label> <br />
        <label> Physical Effort: <input type='text' name='Physical Effort' /> </label> <br />
        <label> Nature Level: <input type='text' name='Nature Level' /> </label> <br />
        <label> Social Level: <input type='text' name='Social Level' /> </label> <br />
        <label> Duration: <input type='text' name='Duration' /> </label> <br />
        <label> Description: <input type='text' name='Description' style={{height: '100000%'}}/> </label> <br />
        <input type='submit' value='Create Adventure' />
      </form>
    </div>
  }
}

export default EventCreator;
