import React, { FC, memo } from 'react'
import { MoviesListProps } from './interfaces';
import MovieItem from './MovieItem';

const MoviesList: FC<MoviesListProps> = ({
  movies,
  data,
  loading,
  error
}) => {
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!movies.length && data) {
    return (
      <div>No results found.</div>
    )
  }

  if (error) {
    return (
      <div className="error">
        Oops! An error occurred
      </div>
    )
  }
  
  return (
    <>
      {
        movies.map((movie, index) => (
          <MovieItem
            data={movie}
            key={`${movie.imdbID}${index}`}
          />
        ))
      }
    </>
  );
}

export default memo(MoviesList);