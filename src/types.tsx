export type MovieType = {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    overview: string;
    release_date: string;
    genres: string;
}

export type MovieVideoType = {
    key: string,
    type: string,
}

export type MovieModalInfoType = {
    movieId: number;
    title: string;
    overview: string,
    release_date: string,
}
