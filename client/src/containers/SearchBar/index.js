import React from 'react';
import { StyledSearchBar, SearchBox, SearchIcon, SearchInput } from './style';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchBox>
        <SearchIcon />
        <SearchInput placeholder='Search' />
      </SearchBox>
    </StyledSearchBar>
  )
};

export default SearchBar;
