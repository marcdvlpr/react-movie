import { useState, useEffect, useCallback } from 'react';
import { getMovie, getMovieCredits, getMovieTrailer } from '../api';

const initialState = {
  movie: {},
  actors: [],
  directors: [],
  trailer: {},
  loading: true,
  error: false,
};

export const useMovieFetch = (movieID) => {
  const [state, setState] = useState(initialState);

  const fetchMovie = useCallback(async () => {
    try {
      const movie = await getMovie(movieID);
      const credits = await getMovieCredits(movieID);
      const trailer = await getMovieTrailer(movieID);

      const directors = credits.crew.filter(
        (member) => member.job === 'Director'
      );

      setState(prev => ({
        ...prev,
        movie,
        actors: credits.cast,
        directors,
        trailer,
        loading: false,
      }));
    } catch (err) {
      setState((prev) => ({ ...prev, loading: false, error: true }));
    }
  }, [movieID]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, movieID]);

  return {
    ...state,
  }
};
