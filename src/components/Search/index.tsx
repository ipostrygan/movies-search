import React, { FC, memo } from 'react'
import { SearchProps } from "./interfaces";
import './search.scss';

const Search: FC<SearchProps> = ({
  onChange
}) => (
  <input
    type="text"
    className="search-input"
    placeholder="Search for movies by typing here..."
    aria-label="Search for movies"
    onChange={onChange}/>
);

export default memo(Search);
