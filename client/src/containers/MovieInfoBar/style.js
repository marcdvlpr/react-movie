import styled from 'styled-components';
import { MdAccessTime, MdDateRange } from 'react-icons/md';

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 6vh;
  background: var(--secondaryColor);
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 2rem;
`;

export const MovieInfoBarContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: var(--white);
`;

export const MovieInfoBarItem = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeIcon = styled(MdAccessTime)`
  margin-right: 1vw;
  color: var(--primaryColor);
`;

export const DateIcon = styled(MdDateRange)`
  margin-right: 1vw;
  color: var(--primaryColor);
`;

export const MovieInfoBarText = styled.p`
  font-size: 1rem;
`;
