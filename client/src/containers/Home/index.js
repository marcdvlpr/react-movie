import React, { useState } from 'react';
import HeroImage from '../HeroImage';
import SearchBar from '../SearchBar';
import Grid from '../Grid';
import { MovieThumb } from '../../components/Thumb';
import { Spinner } from '../../components/Spinner';
import { LoadMoreButton } from '../../components/Button';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.png';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = search => {
    const searchEndpoint = `/api/v1/movies/search/movie?query=${search}`;
    const popularEndpoint = `/api/v1/movies`;

    const endpoint = search ? searchEndpoint : popularEndpoint;

    setSearchTerm(search);
    fetchMovies(endpoint);
  }

  const loadMoreMovies = () => {
    const searchEndpoint = `/api/v1/movies/search/movie?query=${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `/api/v1/movies?page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  }

  if (error) return <div>ERROR</div>;

  if (!movies[0]) return <Spinner />;

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid
        title={searchTerm ? 'Search Result' : 'Popular Movies'}
      >
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            image={
              movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
            }
            movieID={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreButton title={'Load More'} callback={loadMoreMovies} />
      )}
    </>
  )
};

export default Home;
