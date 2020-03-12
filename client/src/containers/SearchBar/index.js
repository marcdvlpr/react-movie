import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar, SearchBox, SearchIcon, SearchInput } from './style';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeout = useRef(null);

  const doSearch = event => {
    const { value } = event.target;

    clearTimeout(timeout.current)
    setState(value);

    timeout.current = setTimeout(() => {
      callback(value);
    },500);
  }

  return (
    <StyledSearchBar>
      <SearchBox>
        <SearchIcon />
        <SearchInput
          type='text'
          placeholder='Search Movie'
          onChange={doSearch}
          value={state}
        />
      </SearchBox>
    </StyledSearchBar>
  )
};

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar;
