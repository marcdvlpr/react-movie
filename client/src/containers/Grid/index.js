import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, Title, StyledGridContent } from './style';

const Grid = ({ title, children }) => {
  return (
    <StyledGrid>
      <Title>{title}</Title>
      <StyledGridContent>
        {children}
      </StyledGridContent>
    </StyledGrid>
  )
};

Grid.propTypes = {
  title: PropTypes.string
}

export default Grid;
