import styled from 'styled-components';
import { MdBookmark } from 'react-icons/md';

export const MovieThumbWrapper = styled.div`
  width: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 80% !important;
    margin: 0 auto;
  }
`;

export const StyledMovieThumb = styled.img`
  width: 100%;
  transition: all 0.3s;
  border-radius: 1rem;
  animation: animateMovieThumb 0.5s;
  object-fit: cover;
  cursor: pointer;

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BookmarkIcon = styled(MdBookmark)`
  position: absolute;
  top: -5px;
  left: 10%;
  font-size: 2rem;
  color: ${props => props.color, `rgba(255, 255, 255, .8)`};
  z-index: 1000;
  cursor: pointer;

  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const StyledActorThumb = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
`;
