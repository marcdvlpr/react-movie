import styled from 'styled-components';

export const StyledMovieThumb = styled.img`
  width: 100%;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 1rem;
  animation: animateMovieThumb 0.5s;
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
`;
