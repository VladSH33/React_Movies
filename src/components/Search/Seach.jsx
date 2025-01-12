import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="movie search"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <button
          className="btn search-btn"
          onClick={() => this.props.searchMovies(this.state.search)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
