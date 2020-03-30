import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const StyledMovieInfo = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : 'rgb(0, 0, 0)'};
  background-size: cover !important;
  background-position: center !important;
  width: 100vw;
  padding: 4vh 2vw;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MovieInfoContent = styled.div`
  display: grid;
  grid-template-columns: 35vh auto;
  max-width: 1280px;
  min-height: 52.5vh;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 2rem;
  }
`;

export const MovieInfoThumb = styled.div`
  width: 35vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 60% !important;
    margin: 0 auto;
  }
`;

export const MovieInfoContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 2rem;
  color: rgb(255, 255, 255);
  overflow: hidden;
`;

export const MovieInfoTitle = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem !important;
  }
`;

export const MovieInfoSubtitle = styled.h3`
  font-size: 1rem;
  line-height: 0;
  margin-top: 2rem;
`;

export const MovieInfoText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.5rem 0;
`;

export const MovieInfoDetails = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const MovieInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieInfoRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgb(251, 197, 0);
  color: rgb(0, 0, 0);
  font-weight: 800;
`;

export const MovieTrailer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;
