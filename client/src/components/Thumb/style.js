import styled from 'styled-components';

export const StyledMovieThumb = styled.img`
  width: 100%;
  max-height: 430px;
  transition: all 0.3s;
  border-radius: 1rem;
  animation: animateMovieThumb 0.5s;
  object-fit: cover;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 375px) {
    width: 80%;
  }
`;
