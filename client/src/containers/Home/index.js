import React, { useState } from 'react';
import HeroImage from '../HeroImage';
import SearchBar from '../SearchBar';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import Spinner from '../../components/Spinner';

const Home = () => {
  const [{ state, loading, error }, fetchMovie] = useHomeFetch();

  if (error) return <div>ERROR</div>
  if (!state.movies[0]) return <div>LOADING</div>

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Spinner />
    </>
  )
};

export default Home;
