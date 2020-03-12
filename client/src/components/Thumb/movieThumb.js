import React from 'react';
import PropTypes from 'prop-types';
import { StyledMovieThumb } from './style';

export const MovieThumb = ({ image }) => {
  return (
    <StyledMovieThumb src={image} alt='moviethumb' />
  )
};

MovieThumb.propTypes = {
  image: PropTypes.string
}
