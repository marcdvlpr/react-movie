import React from 'react';
import PropTypes from 'prop-types';
import { StyledActorThumb } from './style';

export const ActorThumb = ({ image }) => {
  return (
    <StyledActorThumb src={image} alt='actorthumb' />
  )
};

ActorThumb.propTypes = {
  image: PropTypes.string
}
