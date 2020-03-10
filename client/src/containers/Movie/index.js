import React from 'react';
import Navigation from '../Navigation';
import MovieInfo from '../MovieInfo';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import { Spinner } from '../../components/Spinner';

const Movie = ({ movieID }) => {
  const [movie, loading, error] = useMovieFetch(movieID);

  if (error) return <div>Error</div>;

  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo  movie={movie} />
      <Spinner />
    </>
  )
}

export default Movie;
