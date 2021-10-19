import React, { FC, memo } from 'react'
import { MovieItemProps } from './interfaces';
import './movies.scss';

const MovieItem: FC<MovieItemProps> = ({
  data
}) => {
  const { Title, Year, Poster } = data;

  return (
    <div className="movie">
      <img className="movie__poster" alt={`${Title}-poster`} src={Poster}/>
      <div className="movie__data">
        <p className="movie__title">
          {Title}
        </p>
        <p className="movie__year">
          {Year}
        </p>
      </div>
    </div>
  );
}

export default memo(MovieItem);