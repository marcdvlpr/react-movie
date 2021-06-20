import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

export const BackButton = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

BackButton.propTypes = {
  title: PropTypes.string,
};
