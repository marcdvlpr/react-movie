import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';

export const StyledLoginBtn = styled.button`
  margin: 0 1vw;
  padding: 0.5rem 2rem;
  background-color: transparent;
  color: var(--primaryColor);
  border: 0.15rem solid var(--primaryColor);
  border-radius: 10rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: var(--primaryColor);
    color: var(--secondaryColor);
  }
`;

export const StyledLoadMoreBtn = styled.button`
  display: block;
  padding: 0.8rem 7rem;
  margin: 1rem auto;
  background-color: var(--secondaryColor);
  color: var(--white);
  border-radius: 2rem;
  border: none;
  font-size: 2vh;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const StyledTrailerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--primaryColor);
  border: 0.15rem solid var(--primaryColor);
  border-radius: 10rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: var(--primaryColor);
    color: var(--secondaryColor);
  }
`;

export const TrailerIcon = styled(FaYoutube)`
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;
