import React from "react";

class CurrentActivity extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span>
        <div className="main-image-section">
          <img className="main-image" src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/v6/p051v6vn.jpg" alt="adventure" />
        </div>

        <div className="description-section">Adventure Awaits!</div>
      </span>;
  }
}

export default CurrentActivity;
