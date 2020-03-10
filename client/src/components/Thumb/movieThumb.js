import React from 'react';
import { StyledMovieThumb } from './style';

export const MovieThumb = ({ image }) => {
  return (
    <StyledMovieThumb src={image} alt='moviethumb' />
  )
};
