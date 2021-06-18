import React from 'react';
import { Link } from '@reach/router';
import HeroImage from '../HeroImage';
import SearchBar from '../SearchBar';
import Grid from '../Grid';
import { MovieThumb } from '../../components/Thumb';
import { Spinner } from '../../components/Spinner';
import { LoadMoreButton } from '../../components/Button';
import { useMoviesFetch } from '../../hooks/useMoviesFetch';
import { titleToRoute } from '../../helpers';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.png';

const Home = () => {
  const {
    movies,
    currentPage,
    totalPages,
    heroImage,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useMoviesFetch();

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
      <SearchBar callback={setSearchTerm} />
      <Grid title={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}/${titleToRoute(movie.original_title)}`}
          >
            <MovieThumb
              bookmark={false}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
            />
          </Link>
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreButton title={'Load More'} callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
