import React from 'react';
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

export default Grid;
