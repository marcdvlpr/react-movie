import React from 'react';
import PropTypes from 'prop-types';
import { MovieThumbWrapper, StyledMovieThumb, BookmarkIcon } from './style';

export const MovieThumb = ({ image, bookmark }) => {
  return (
    <MovieThumbWrapper>
      <StyledMovieThumb src={image} alt='moviethumb' />
      <BookmarkIcon color={bookmark ? `rgba(251, 197, 0, 1)` : null} />
    </MovieThumbWrapper>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string
};
