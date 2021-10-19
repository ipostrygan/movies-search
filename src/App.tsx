import React, { useState, ChangeEvent } from 'react';
import useFetch from 'use-http';

import Search from './components/Search';
import MoviesList from './components/MoviesList';
import { Movie } from './components/MoviesList/interfaces';
import { API_KEY, API_URL } from './components/constants';

import './App.scss';

const App = () => {
  const { get, response, loading, error } = useFetch(`${API_URL}/?apikey=${API_KEY}&type=movie`);
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      const result = await get(`&s=${value}`);

      if (response.ok && result.Response === 'True') { // had to do this to handle case when API returns "{Response: 'False', Error: 'Too many results.'}"
        setMovies(result.Search);
      }
    }
  };

  return (
    <div className="movies-list-wrapper">
      <Search onChange={fetchMovies}/>
      <MoviesList
        movies={movies}
        loading={loading}
        error={error}
        data={!!response.data}
      />
    </div>
  );
}

export default App;
