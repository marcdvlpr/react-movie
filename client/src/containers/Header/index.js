import React from 'react';
import { Link } from '@reach/router';
import { StyledHeader, NavHeader, NavLeft, NavRight, Title } from './style';
import { Logo } from '../../components/Logo';
import { LoginButton } from '../../components/Button';
import RMLogo from '../../images/rm_logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <NavHeader>

        <NavLeft>
          <Link to={'/'}>
            <Logo src={RMLogo} alt='react-movie-logo' />
          </Link>
          <Title>React Movie</Title>
        </NavLeft>

        <NavRight>
          <LoginButton>Sign In</LoginButton>
        </NavRight>

      </NavHeader>
    </StyledHeader>
  );
};

export default Header;
