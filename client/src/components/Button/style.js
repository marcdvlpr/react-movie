import styled from 'styled-components';
import { MdMovie } from 'react-icons/md';

export const StyledLoginBtn = styled.button`
  background-color: rgb(251, 197, 0);
  opacity: 0.8;
  color: rgb(35, 35, 35);
  padding: 1vh 4vw;
  border-radius: 10rem;
  text-align: center;
  margin: 0 1vw;
  border: none;
  text-decoration: none;
  outline: none;
  font-size: 2vw;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const StyledLoadMoreBtn = styled.button`
  display: block;
  padding: 0.8rem 7rem;
  margin: 1rem auto;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 2rem;
  font-family: 'Abel', sans-serif;
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
  background-color: rgb(251, 197, 0);
  opacity: 0.9;
  color: rgb(35, 35, 35);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-family: 'Abel', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: all 0.3s;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const TrailerIcon = styled(MdMovie)`
  color: rgb(35, 35, 35);
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
