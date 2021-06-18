import { useState, useEffect, useCallback } from 'react';
import { getMovies } from '../api';

const initialState = {
  movies: [],
  currentPage: 0,
  totalPages: 0,
  totalResults: 0,
  loading: true,
  error: false,
};

export const useMoviesFetch = () => {
  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = useCallback(async (page, searchTerm = '') => {
    try {
      const result = await getMovies(searchTerm, page);

      setState(prev => ({
        ...prev,
        movies: page > 1 ? [...prev.movies, ...result.results] : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
        totalResults: result.total_results,
        loading: false,
      }));
    } catch (err) {
      setState((prev) => ({ ...prev, loading: false, error: true }));
    }
  }, []);

  useEffect(() => {
    fetchMovies(1, searchTerm);
  }, [fetchMovies, searchTerm])

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.currentPage + 1, searchTerm);
    setIsLoadingMore(false);
  }, [fetchMovies, isLoadingMore, state.currentPage, searchTerm])

  return {
    ...state,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  }
};
