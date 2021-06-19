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
  width: 100%;
  margin: 0 auto;
  padding: 0 2vw;
`;

export const HomeLink = styled.p`
  font-size: 2.5vh;
  font-family: 'Abel', sans-serif;
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgb(251, 197, 0);;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 2vh;
  }
`;

export const Text = styled.p`
  font-size: 2.5vh;
  font-family: 'Abel', sans-serif;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 1vh;

  @media screen and (max-width: 768px) {
    font-size: 2vh;
  }
`;
