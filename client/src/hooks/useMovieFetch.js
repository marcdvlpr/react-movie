import { useState, useEffect, useCallback } from 'react';

export const useMovieFetch = movieID => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `/api/v1/movies/${movieID}`;
      const result = await (await fetch(endpoint)).json();

      setState({...result})

    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [movieID])

  useEffect(() => {
    fetchData();
  }, [])

  return [state, loading, error];
};
