import React from 'react';
import { Link } from '@reach/router';
import { StyledMovieThumb } from './style';

export const MovieThumb = ({ image, movieID }) => {
  return (
    <Link to={`${movieID}`}>
      <StyledMovieThumb src={image} alt='moviethumb' />
    </Link>
  )
};
