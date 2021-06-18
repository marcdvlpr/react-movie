import axios from 'axios';
import { BASE_URL } from '../config';

export const getMovies = async (searchTerm, page) => {
  const endpoint = searchTerm
    ? `${BASE_URL}/search/movie?query=${searchTerm}&page=${page}`
    : `${BASE_URL}?page=${page}`;
  const { data } = await axios.get(endpoint);
  return data;
};

export const getMovie = async (movieID) => {
  const endpoint = `${BASE_URL}${movieID}`;
  const { data } = await axios.get(endpoint);
  return data;
};
