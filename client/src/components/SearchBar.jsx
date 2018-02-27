import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <span>
        <form>
          <label>
            <input type="text" />
            <input type="submit" value="submit" />
          </label>
        </form>
      </span>;  
  }
}

export default SearchBar;