import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledNavigation, StyledNavigationContent, HomeLink, Text } from './style';

const Navigation = ({ movie }) => {
  return (
    <StyledNavigation>
      <StyledNavigationContent>
        <Link to={'/'}>
          <HomeLink>Home</HomeLink>
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
