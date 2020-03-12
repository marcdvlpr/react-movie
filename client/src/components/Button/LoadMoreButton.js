import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoadMoreBtn } from './style';

export const LoadMoreButton = ({ title, callback }) => {
  return (
    <StyledLoadMoreBtn onClick={callback}>
      {title}
    </StyledLoadMoreBtn>
  )
};

LoadMoreButton.propTypes = {
  title: PropTypes.string,
  callback: PropTypes.func
}
