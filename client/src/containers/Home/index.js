import React, { useState } from 'react';
import HeroImage from '../HeroImage';
import SearchBar from '../SearchBar';
import Grid from '../Grid';
import { MovieThumb } from '../../components/Thumb';
import Spinner from '../../components/Spinner';
import { LoadMoreButton } from '../../components/Button';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovie
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const loadMoreMovies = () => {
    const searchEndpoint = `/api/v1/movies/search/movie?query=${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `/api/v1/movies?page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovie(endpoint);
  };

  if (error) return <div>ERROR</div>;

  if (!movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            image={
              movie.poster_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
              : null
            } />
        ))}
      </Grid>
      {loading && <Spinner />}
      <LoadMoreButton title={'Load More'} callback={loadMoreMovies} />
    </>
  )
};

export default Home;
