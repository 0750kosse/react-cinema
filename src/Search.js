import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      currentValue: " "
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      currentValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form style={{ border: "2px dotted black" }}>
          <input
            onChange={this.handleChange}
            value={this.state.currentValue}
            type="text"
            placeholder="Search"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
