import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: rgb(53, 53, 53);
  color: rgb(255, 255, 255);
`;

export const StyledNavigationContent = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2vw;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 2.5vh;
  color: rgb(255, 255, 255);
  padding-right: .5vw;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 2vh;
  }
`;
