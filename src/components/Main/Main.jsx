import React, { Component } from "react";
import "./Main.css";
import axios from "axios";
import MovieList from "../MovieList/MovieList";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Seach";
import TypeMovie from "../TypeMovie/TypeMovie";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movieSearch: "",
    movies: [],
    type: "",
    loading: true,
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&type=series`
    );
    this.setState({ movies: response.data.Search, loading: false });
  }

  searchMovies = async (movie) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`
    );
    if (!movie) {
      return alert("Поле не должно быть пустым!");
    }
    this.setState({ movieSearch: movie });
    this.setState({ movies: response.data.Search, loading: false });
  };

  typeMovies = async (type) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
        !this.state.movieSearch ? "matrix" : this.state.movieSearch
      }${type === "all" ? "" : `&type=${type}`}`
    );
    this.setState({ type: type });
    this.setState({ movies: response.data.Search, loading: false });
  };

  render() {
    const { loading, movies } = this.state;
    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} />
        <TypeMovie typeMovies={this.typeMovies} />
        {!loading ? <MovieList movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
