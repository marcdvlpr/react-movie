import React from 'react';
import { Link } from '@reach/router';
import { StyledNavigation, StyledNavigationContent, Text } from './style';

const Navigation = ({ movie }) => {
  return (
    <StyledNavigation>
      <StyledNavigationContent>
        <Link to={'/'}>
          <Text>Home</Text>
        </Link>
        <Text>|</Text>
        <Text>{movie}</Text>
      </StyledNavigationContent>
    </StyledNavigation>
  )
};

export default Navigation;
