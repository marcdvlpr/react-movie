import React from 'react';
import Navigation from '../Navigation';
import { useMovieFetch } from '../../hooks/useMovieFetch';

const Movie = ({ movieID }) => {
  const [movie, loading, error] = useMovieFetch(movieID);

  console.log(movie);
  
  return (
    <>
      <Navigation movie={movie.original_title} />

    </>
  )
}

export default Movie;
