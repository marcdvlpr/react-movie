import React from 'react';
import { StyledHeader, NavHeader, NavLeft, NavRight, Title } from './style';
import { Logo } from '../../components/Logo';
import RMLogo from '../../images/rm_logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <NavHeader>
        <NavLeft>
          <Logo src={RMLogo} />
          <Title>React Movie</Title>
        </NavLeft>
        <NavRight>
        </NavRight>
      </NavHeader>
    </StyledHeader>
  );
};

export default Header;
