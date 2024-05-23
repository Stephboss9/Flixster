import Navigation from './components/Navigation/Navigation';
import { useState} from 'react';
import MovieGrid from './components/MovieGrid/MovieGrid';
import { useMovies } from '../src/hooks/useMovies';
import ApiClient from '../services/api-client';
import { MovieType } from './types';

const api: ApiClient = new ApiClient();


const App = () => {

  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const [page, setPage] = useState<number>(1);
  const [movieListCategory, setMovieListCategory] = useState<string>('now_playing');
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    isLoading,
    isError,
    error,
    hasNextPage,
  } = useMovies({ page, movieListCategory, api, searchQuery, setMovies });

  return (
    <>
      <Navigation setMovieListCategory={setMovieListCategory} apiClient={api} setSearchQuery={setSearchQuery} setMovies={setMovies} page={page} setPage={setPage} />
      <MovieGrid movies={movies} apiClient={api} isLoading={isLoading} hasNextPage={hasNextPage} setPage={setPage} isError={isError} error={error} />
    </>
  );
}

export default App;
