import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieForm from "./MovieForm";

const Movies = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const addMovie = (newMovie) =>{
      setMovies([...movies, newMovie]);

  }

  const deleteMovie = (index) =>{
    const moviesArray = [...movies];
    moviesArray.splice(index,1)

      setMovies([...moviesArray])

  }
  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} deleteMovie={deleteMovie}/>
          <MovieForm addMovie={addMovie}/>
        </div>
      </div>
    </div>
  );
}

export default Movies;
