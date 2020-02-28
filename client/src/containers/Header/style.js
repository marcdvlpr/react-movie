import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: rgb(28, 28, 28);
  padding: 0 0.5vw;
  box-sizing: border-box;
`;

export const NavHeader = styled.nav`
  display: flex;
  max-width: 1280px;
  min-height: 10vh;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5vh 0;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    max-width: 1280px;
    min-height: 0px;
  }
`;

export const NavLeft = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const NavRight = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-weight: 500;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
