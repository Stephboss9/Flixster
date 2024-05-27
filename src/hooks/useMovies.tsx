import { useState, useEffect } from 'react';
import ApiClient from '../../services/api-client';
import { MovieType } from '../types';

type useMoviesHookType = {
    page: number;
    movieListCategory: string;
    api: ApiClient;
    searchQuery: string;
    setMovies: React.Dispatch<React.SetStateAction<Array<MovieType>>>;
}

/** 
 * A hook that handles retrieving movies based on specefic categorys and user typed input, 
   and updates the appropriate state variables like the movies state
*/
export const useMovies = ({ page, movieListCategory, api, searchQuery = '', setMovies }: useMoviesHookType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({ message: "" });
    const [hasNextPage, setHasNextPage] = useState(false);
    let newMovies: Array<MovieType>;

    useEffect(() => {
        setIsLoading(true);
        setError({ message: "" });
        setIsError(false);

        api.getMovies(page, movieListCategory, searchQuery).then(result => {
            newMovies = result.data;
            setMovies(prevMovies => {
                /*
                handles when the same navbar link (movie list category) is clicked twice
                and when movies belonging to a different category are requested 
                */

                if (page === 1)
                    return [...newMovies];
                else
                    return [...prevMovies, ...newMovies];

            });
            setHasNextPage(Boolean(newMovies.length));
            setIsLoading(false);
            setIsError(false);
        }).catch(e => {
            setIsLoading(false);
            setIsError(true);
            setError({ message: e.message });
        });

        return;
    }, [page, movieListCategory, searchQuery])

    return { isLoading, isError, error, hasNextPage };
}

export default useMovies;