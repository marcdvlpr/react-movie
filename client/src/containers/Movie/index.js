import React from 'react';
import Navigation from '../Navigation';
import { useMovieFetch } from '../../hooks/useMovieFetch';

const Movie = ({ movieID }) => {
  const [movie, loading, error] = useMovieFetch(movieID);

  if (error) return <div>Error</div>;

  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />

    </>
  )
}

export default Movie;
