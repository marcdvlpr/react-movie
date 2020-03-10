import React from 'react';
import { StyledActorThumb } from './style';

export const ActorThumb = ({ image }) => {
  return (
    <StyledActorThumb src={image} alt='actorthumb' />
  )
};
