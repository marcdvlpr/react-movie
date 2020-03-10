import { useState, useEffect, useCallback } from 'react';

export const useMovieFetch = movieID => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `/api/v1/movies/${movieID}`;
      const result = await (await fetch(endpoint)).json();

      const creditsEndpoint = `/api/v1/movies/${movieID}/credits`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();

      const directors = creditsResult.crew.filter(
        member => member.job === 'Director'
      )
      setState({
        ...result,
        actors: creditsResult.cast,
        directors
      })

    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [movieID])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return [state, loading, error];
};
