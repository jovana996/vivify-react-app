import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies,deleteMovie) => (
  <div className="card-deck">
    {movies.map((movie, index) => (
       <div>
      <MovieCard key={movie.id} movie={movie}/>
      {!movie.id &&<button onClick={()=> deleteMovie(index)}>Delete</button>}
      </div>
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie }) => <div>{getMovies(movies, deleteMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
