import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const StyledSearchBar = styled.div`
  display: flex;
  height: 10vh;
  background-color: rgb(28, 28, 28);
  align-items: center;
  padding: 0 1vw;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  width: 100vw;
  height: 6vh;
  border-radius: 10rem;
  background-color: rgb(53, 53, 53);
  margin: 0 auto;
`;

export const SearchIcon = styled(FaSearch)`
  width: 5vw;
  font-size: 2vh;
  margin: 0 1vw;
  color: rgb(255, 255, 255);
`;

export const SearchInput = styled.input`
  width: 85vw;
  height: 4vh;
  border: none;
  background-color: transparent;
  font-size: 2.5vh;
  font-family: 'Abel', sans-serif;
  color: rgb(255, 255, 255);

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.1rem;
  }
`;
