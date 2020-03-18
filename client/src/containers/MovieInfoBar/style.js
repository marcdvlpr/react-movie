import styled from 'styled-components';
import { MdAccessTime, MdDateRange } from 'react-icons/md';

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 6vh;
  background: rgb(28, 28, 28);
  padding: 0.5rem;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 2rem;
`;

export const MovieInfoBarContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: rgb(255, 255, 255);
`;

export const MovieInfoBarItem = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeIcon = styled(MdAccessTime)`
  margin-right: 1vw;
  color: rgb(251, 197, 0);
`;

export const DateIcon = styled(MdDateRange)`
  margin-right: 1vw;
  color: rgb(251, 197, 0);
`;

export const MovieInfoBarText = styled.p`
  font-size: 1rem;
`;
