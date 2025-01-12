import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

const MovieList = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <MovieItem key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Нет данных для отображения</h3>
      )}
    </div>
  );
};

export default MovieList;
