import React from 'react';
import Navigation from '../Navigation';
import MovieInfo from '../MovieInfo';
import Grid from '../Grid';
import MovieInfoBar from '../MovieInfoBar';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import { Spinner } from '../../components/Spinner';
import Actor from '../Actor';

const Movie = ({ movieID }) => {
  const [movie, loading, error] = useMovieFetch(movieID);

  if (error) return <div>Error</div>;

  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo  movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        date={movie.release_date}
      />
      <Grid title='Actors'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.id}
            actor={actor}
          />
        ))}
      </Grid>
    </>
  )
};

export default Movie;