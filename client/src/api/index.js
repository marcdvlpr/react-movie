import axios from 'axios';

export const getMovies = async (searchTerm, page) => {
  const endpoint = searchTerm
    ? `${BASE_URL}/search/movie?query=${searchTerm}&page=${page}`
    : `${BASE_URL}?page=${page}`;
  const { data } = await axios.get(endpoint);
  return data;
};
