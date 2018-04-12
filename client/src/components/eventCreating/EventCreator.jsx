import React from 'react';

class EventCreator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
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
  }

  render(){
    return <div style={{ height: "100%" }}>
        <form className="event-creation">
          <label>
            Activity Name: <input type="text" name="Activity Name" placeholder="Fishing" />
          </label> <br />
          <label>
            Image Link: <input type="text" name="Image" placeholder="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,q_65,w_768/v1/clients/norway/Fishing_2152634f-ba23-4044-8145-6ec3bab642bf.png" />
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
            Description: 
            <div>
              <textarea rows='4' cols='100' className='description-box' name="Description" placeholder='All you need is a chair and fishing rod to enjoy hours of relaxation by your favorite body of water.'/>
            </div>

          </label> <br />
          <input className="create-button" type="submit" value="Create Adventure" />
        </form>
      </div>;
  }
}

export default EventCreator;
