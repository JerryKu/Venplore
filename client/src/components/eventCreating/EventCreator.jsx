import React from 'react';

class EventCreator extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return <div style={{ height: "100%" }}>
        <form className="event-creation">
          <label> Activity Name:
<input type="text" name="Activity Name" />
          </label> <br />
          <label>
            Image Link: <input type="text" name="Image" />
          </label> <br />
          <label>
            Overall Enjoyability: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label>
            Cost: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label>
            Mental Effort: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label>
            Physical Effort: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label>
            Nature Level: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label>
            Social Level: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label>
            Duration: <input type="range" min="0" max="5" step="1" />
          </label> <br />
          <label style={{ height: "20%" }}>
            Description: <input type="text" name="Description" style={{ height: "100%" }} />
          </label> <br />
          <input className="create-button" type="submit" value="Create Adventure" />
        </form>
      </div>;
  }
}

export default EventCreator;
