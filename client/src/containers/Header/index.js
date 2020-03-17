import React from 'react';
import { Link } from '@reach/router';
import { StyledHeader, NavHeader, NavLeft, NavRight, Title } from './style';
import { Logo } from '../../components/Logo';
import { LoginButton } from '../../components/Button';
import RMLogo from '../../images/rm_logo2.png';

const Header = () => {
  return (
    <StyledHeader>
      <NavHeader>

        <NavLeft>
          <Link to={'/'}>
            <Logo image={RMLogo} alt='reactmovie-logo' />
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
