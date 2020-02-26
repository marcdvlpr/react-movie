import React from 'react';
import { StyledHeader, NavHeader, NavLeft, NavRight, Title } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <NavHeader>
        <NavLeft>
          <Title>React Movie</Title>
        </NavLeft>
        <NavRight>
        </NavRight>
      </NavHeader>
    </StyledHeader>
  );
};

export default Header;
