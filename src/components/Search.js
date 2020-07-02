import React from 'react';

const Search = ({ onSearch, search }) => (
  <>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={search} />
  </>
)

export default Search;