import React from 'react';
import PropTypes from 'prop-types';
import { StyledLogo } from './style';

export const Logo = ({ image }) => {
  return (
    <StyledLogo src={image} />
  )
};

Logo.propTypes = {
  image: PropTypes.string
};
