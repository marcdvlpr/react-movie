import React from 'react';
import Navigation from '../Navigation';
import MovieInfo from '../MovieInfo';
import Grid from '../Grid';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import { Spinner } from '../../components/Spinner';
import { ActorThumb } from '../../components/Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.png';

const Movie = ({ movieID }) => {
  const [movie, loading, error] = useMovieFetch(movieID);

  if (error) return <div>Error</div>;

  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo  movie={movie} />
      <Grid title='Actors'>
        {movie.actors.map(actor => (
          <ActorThumb
            key={actor.id}
            image={actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
            }
          />
        ))}
      </Grid>
    </>
  )
};

export default Movie;
