import React from 'react';
import { StyledTrailerBtn, TrailerIcon } from './style';

export const TrailerButton = ({ title, onClick }) => {
  return (
    <StyledTrailerBtn onClick={onClick}>
      <TrailerIcon />
      {title}
    </StyledTrailerBtn>
  );
};
