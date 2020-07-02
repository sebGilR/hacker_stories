import React from 'react';

const Search = ({ onSearch, search }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={search} />
  </div>
)

export default Search;