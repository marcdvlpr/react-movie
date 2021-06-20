import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

export const LoadMoreButton = ({ title, callback }) => {
  return <StyledButton onClick={callback}>{title}</StyledButton>;
};

LoadMoreButton.propTypes = {
  title: PropTypes.string,
  callback: PropTypes.func,
};
