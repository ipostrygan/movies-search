export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface MoviesListProps {
  movies: Movie[];
  loading: boolean;
  error?: Error;
  data: boolean;
}

export interface MovieItemProps {
  data: Movie;
}