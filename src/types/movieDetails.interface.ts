export interface iMovieDetails {
    backdrop_path: string,
    genres: iGenre[],
    id: number,
    overview: string,
    poster_path: string,
    title: string,
    vote_average: number,
    runtime: number
}

export interface iGenre {
    id: number,
    name: string
}