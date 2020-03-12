import React from 'react';
import PropTypes from 'prop-types';
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

Navigation.propTypes = {
  movie: PropTypes.string
}

export default Navigation;
