import React, { Component } from "react";
import "./TypeMovie.css";

class TypeMovie extends Component {
  state = {
    type: "",
  };
  handleType = (e) => {
    this.props.typeMovies(e.target.id);
  };

  render() {
    return (
      <div className="types">
        <div className="all type">
          <input type="radio" name="type" id="all" onChange={this.handleType} />
          ALL
        </div>
        <div className="movie type">
          <input
            type="radio"
            name="type"
            id="movie"
            onChange={this.handleType}
          />
          Movies only
        </div>
        <div className="movie type">
          <input
            type="radio"
            name="type"
            id="series"
            onChange={this.handleType}
          />
          Series only
        </div>
      </div>
    );
  }
}

export default TypeMovie;
