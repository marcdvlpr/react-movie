import React from 'react';
import { StyledLoadMoreBtn } from './style';

export const LoadMoreButton = ({ title, callback }) => {
  return (
    <StyledLoadMoreBtn onClick={callback}>
      {title}
    </StyledLoadMoreBtn>
  )
};
